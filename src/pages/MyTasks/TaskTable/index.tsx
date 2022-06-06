import { useState } from "react";
import { RiArrowDownSFill as ArrowDownIcon, RiArrowUpSFill as ArrowUpIcon } from "react-icons/ri";
import { TaskItem } from "../../../utils/tasks";
import { Text } from "../../../shared/common/Text";
import { Avatar } from "../../../shared/common/Avatar";
import { Table, Head, Body, Row, Cell } from "./styles";
import { formatPointEstimate } from "../../../utils/pointEstimate";
import { formatDueDate, getDueDateFontColor } from "../../../utils/date";

interface Props {
   status: string;
   taskList: TaskItem[];
}

function TaskTable(props: Props) {
   const { status, taskList } = props;

   const [isExpanded, setIsExpanded] = useState(true);

   const toggleExpand = () => {
      setIsExpanded((prev) => !prev);
   };

   return (
      <Table>
         <Head>
            <button onClick={toggleExpand} style={{ color: "white" }}>
               {isExpanded ? <ArrowUpIcon size={24} /> : <ArrowDownIcon size={24} />}
            </button>
            <Text variant="body" size="md" weight="regular">
               {status} ({taskList.length})
            </Text>
         </Head>
         <Body isExpanded={isExpanded}>
            {taskList.map((task) => (
               <Row key={task.id}>
                  <Cell>
                     <Text variant="body" size="md" weight="regular">
                        {task.position} {task.name}
                     </Text>
                  </Cell>
                  <Cell>
                     {task.tags.map((tag) => (
                        <span key={tag}>
                           <Text variant="body" size="md" weight="regular">
                              {tag}
                           </Text>
                        </span>
                     ))}
                  </Cell>
                  <Cell>
                     <Text variant="body" size="md" weight="regular">
                        {formatPointEstimate(task.pointEstimate)}
                     </Text>
                  </Cell>
                  <Cell>
                     <Avatar src={task.assignee?.avatar} size={32} />
                     <Text variant="body" size="md" weight="regular">
                        {task.assignee?.fullName}
                     </Text>
                  </Cell>
                  <Cell>
                     <Text
                        size="md"
                        variant="body"
                        weight="regular"
                        color={getDueDateFontColor(task.dueDate)}
                     >
                        {formatDueDate(task.dueDate)}
                     </Text>
                  </Cell>
               </Row>
            ))}
         </Body>
      </Table>
   );
}

export { TaskTable };
