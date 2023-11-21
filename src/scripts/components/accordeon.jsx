import React from "react";

import Text from '../components/text';

import '../../styles/accordeon/__accordeon';

export default function Accordeon({children}){
    
    return (
        <div className="accordeon">
            <p id="accordeon">
            {children}
            </p>
            <Text typeTag='h1' id='diploms'>
                Мои дипломы и сертификаты
            </Text>
        </div>
    )
}


// export default function Task({ uList, setUList }) {
//     const uListLength = uList.length;
  
//     if (uListLength === 0) return null; // TODO: stric compare === done
  
//     const handleLabelClick = useCallback(
//       (elem, list, setList) => {
//         const updatedList = list.map((item) => {
//           if (item.id === elem.id) {
//             return { ...item, checked: !elem.checked };
//           }
//           return item;
//         }, []);
  
//         setList(updatedList);
//       },
//       [uList, setUList]
//     );
  
//     const handleDelete = useCallback(
//       (e) => {
//         const updatedList = uList.filter((object) => object.id !== e.id);
//         setUList(updatedList);
//       },
//       [uList]
//     );
  
//     const taskList = uList.map((e, index) => {
//       return (
//         <li className="task-list__checkbox-wrapper" key={e.key}>
//           <Input
//             type="checkbox"
//             id={`checkbox-${index}`}
//             checked={e.checked}
//             onChangeCheckbox={() => handleLabelClick(e, uList, setUList)} // TODO: usecallback done
//           />
//           <Label htmlFor={`checkbox-${index}`}>
//             {" "}
//             {/* TODO: ``  done*/}
//             {e.value}
//           </Label>
//           <Img
//             src={vector}
//             alt="vector"
//             onChangeClass={() => handleLabelClick(e, uList, setUList)} // TODO: usecallback done
//           />
//           <Img
//             src={trash}
//             alt="trash"
//             onPointerDown={
//               () => handleDelete(e)
//               // TODO: usecallback done
//             }
//           />
//         </li>
//       );
//     });
  
//     return <ul className="task-list__ul">{taskList}</ul>;
//   }
  