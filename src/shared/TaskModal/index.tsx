import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createPortal } from "react-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useTaskModal } from "../../contexts/taskModal/TaskModalContext";
import {
   RiUser3Fill as UserIcon,
   RiPriceTag3Fill as TagIcon,
   RiCalendarCheckLine as DateIcon,
   RiIncreaseDecreaseFill as EstimateIcon,
} from "react-icons/ri";
import {
   Status,
   TaskTag,
   PointEstimate,
   useCreateTaskMutation,
   useUpdateTaskMutation,
   useGetUsersQuery,
   GetTasksDocument,
   GetTasksQuery,
} from "../../graphql";
import {
   ActionsContainer,
   Backdrop,
   CancelButton,
   FormContainer,
   CreateButton,
   TagButton,
   TagButtonContainer,
   TagsContainer,
   TitleInput,
   Menu,
   MenuTitle,
   MenuOption,
   Checkbox,
} from "./styles";
import { formatPointEstimate } from "../../utils/pointEstimate";
import { useState } from "react";
import Avatar from "../common/Avatar";
import { formatDate } from "../../utils/date";
import { toast } from "react-toastify";

function TaskModal() {
   const container = document.getElementById("modal") as HTMLDivElement;
   return createPortal(<Modal />, container);
}

interface FormData {
   name: string;
   tags: string[];
   dueDate: string;
   assigneeId: string;
   pointEstimate: string;
}

const schema = yup.object({
   name: yup.string().required("Task name is required"),
   tags: yup.array().of(yup.string()).min(1, "At least one tag is required"),
   dueDate: yup.date().required("Due date is required"),
   assigneeId: yup.string().required("Assignee is required"),
   pointEstimate: yup.string().required("Point estimate is required"),
});

const pointEstimateOptions: PointEstimate[] = [
   PointEstimate.Zero,
   PointEstimate.One,
   PointEstimate.Two,
   PointEstimate.Four,
   PointEstimate.Eight,
];

const taskTagOptions: TaskTag[] = [
   TaskTag.Ios,
   TaskTag.React,
   TaskTag.Rails,
   TaskTag.NodeJs,
   TaskTag.Android,
];

function Modal() {
   const { task, closeModal } = useTaskModal();
   const [openMenu, setOpenMenu] = useState("");

   const [createTask] = useCreateTaskMutation({
      update: (cache, query) => {
         const data = cache.readQuery<GetTasksQuery>({ query: GetTasksDocument });
         const tasks = data?.tasks || [];
         cache.writeQuery({
            query: GetTasksDocument,
            data: { tasks: [...tasks, query.data?.createTask] },
         });
      },
   });

   const [updateTask] = useUpdateTaskMutation();
   const { data: usersData } = useGetUsersQuery();
   const { control, register, handleSubmit, watch, setValue } = useForm<FormData>({
      resolver: yupResolver(schema),
      defaultValues: {
         name: task?.name || "",
         tags: task?.tags || [],
         dueDate: task?.dueDate || "",
         assigneeId: task?.assignee?.id || "",
         pointEstimate: task?.pointEstimate || "",
      },
   });

   const handleOpenMenu = (menu: string) => () => {
      setOpenMenu((prev) => (prev === menu ? "" : menu));
   };

   const handleFormErrors = () => {
      toast.error("Please fill all required fields", { toastId: "task-modal-error" });
   };

   const handleCreateTask = async (formData: FormData) => {
      console.log(formData);
      try {
         const response = await createTask({
            variables: {
               input: {
                  name: formData.name,
                  status: Status.Backlog,
                  dueDate: formData.dueDate,
                  assigneeId: formData.assigneeId,
                  tags: formData.tags as TaskTag[],
                  pointEstimate: formData.pointEstimate as PointEstimate,
               },
            },
         });
         console.log(response);
         toast.success("Task Created");
         closeModal();
      } catch {
         toast.error("Error creating task", { toastId: "task-modal-error" });
      }
   };

   const handleUpdateTask = async (formData: FormData) => {
      try {
         if (!task) {
            throw new Error("Task not found");
         }
         await updateTask({
            variables: {
               input: {
                  id: task.id,
                  status: task.status,
                  position: task.position,
                  name: formData.name,
                  dueDate: formData.dueDate,
                  assigneeId: formData.assigneeId,
                  tags: formData.tags as TaskTag[],
                  pointEstimate: formData.pointEstimate as PointEstimate,
               },
            },
         });
         toast.success("Task Updated");
         closeModal();
      } catch {
         toast.error("Task not found");
      }
   };

   return (
      <Backdrop
         onClick={closeModal}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         <FormContainer
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit(task ? handleUpdateTask : handleCreateTask, handleFormErrors)}
         >
            <TitleInput
               placeholder="Task Title"
               defaultValue={task?.name}
               className="font-xl-bold"
               {...register("name")}
            />
            <TagsContainer>
               <TagButtonContainer>
                  <TagButton onClick={handleOpenMenu("estimate")}>
                     <EstimateIcon size={24} />
                     <span className="font-md-bold">
                        {watch("pointEstimate")
                           ? formatPointEstimate(watch("pointEstimate") as PointEstimate)
                           : "Estimate"}
                     </span>
                  </TagButton>
                  <Menu isOpen={openMenu === "estimate"}>
                     <MenuTitle>Estimate</MenuTitle>
                     {pointEstimateOptions.map((pointEstimate) => (
                        <MenuOption
                           key={pointEstimate}
                           onClick={() => setValue("pointEstimate", pointEstimate)}
                        >
                           <EstimateIcon size={24} />
                           <span>{formatPointEstimate(pointEstimate)}</span>
                        </MenuOption>
                     ))}
                  </Menu>
               </TagButtonContainer>
               <TagButtonContainer>
                  <TagButton onClick={handleOpenMenu("assignee")}>
                     {watch("assigneeId") ? (
                        <Avatar
                           size={24}
                           src={
                              usersData?.users.find((user) => user.id === watch("assigneeId"))
                                 ?.avatar
                           }
                        />
                     ) : (
                        <UserIcon size={24} />
                     )}
                     <span
                        className="font-md-bold"
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                     >
                        {watch("assigneeId")
                           ? usersData?.users.find((user) => user.id === watch("assigneeId"))
                                ?.fullName
                           : "Assignee"}
                     </span>
                  </TagButton>
                  <Menu isOpen={openMenu === "assignee"}>
                     <MenuTitle>Assign to...</MenuTitle>
                     {usersData?.users.map((user) => (
                        <MenuOption key={user.id} onClick={() => setValue("assigneeId", user.id)}>
                           <Avatar src={user.avatar} size={32} />
                           <span>{user.fullName}</span>
                        </MenuOption>
                     ))}
                  </Menu>
               </TagButtonContainer>
               <TagButtonContainer>
                  <TagButton onClick={handleOpenMenu("tag")}>
                     <TagIcon size={24} />
                     <span
                        className="font-md-bold"
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                     >
                        Label {!!watch("tags")?.length && `(${watch("tags")?.length})`}
                     </span>
                  </TagButton>
                  <Menu isOpen={openMenu === "tag"}>
                     <MenuTitle>Tag Title</MenuTitle>
                     {taskTagOptions.map((tag) => (
                        <MenuOption key={tag} onClick={() => register("assigneeId")}>
                           <Checkbox value={tag} {...register("tags")} />
                           <span>{tag}</span>
                        </MenuOption>
                     ))}
                  </Menu>
               </TagButtonContainer>
               <TagButtonContainer>
                  <Controller
                     name="dueDate"
                     control={control}
                     render={({ field }) => (
                        <DatePicker
                           open={openMenu === "date"}
                           onInputClick={handleOpenMenu("date")}
                           selected={new Date(field.value || new Date().toISOString())}
                           onChange={(date) => {
                              field.onChange(date?.toISOString());
                           }}
                           customInput={
                              <TagButton>
                                 <DateIcon size={24} />
                                 <span
                                    className="font-md-regular"
                                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                                 >
                                    {watch("dueDate") ? formatDate(watch("dueDate")) : "Due Date"}
                                 </span>
                              </TagButton>
                           }
                        />
                     )}
                  />
               </TagButtonContainer>
            </TagsContainer>
            <ActionsContainer>
               <CancelButton type="button" onClick={closeModal} className="font-md-regular">
                  Cancel
               </CancelButton>
               <CreateButton
                  type="submit"
                  className="font-md-regular"
                  backgroundColor={task ? "var(--color-primary-4)" : "var(--color-primary-3)"}
               >
                  {task ? "Update" : "Create"}
               </CreateButton>
            </ActionsContainer>
         </FormContainer>
      </Backdrop>
   );
}

export { TaskModal };
