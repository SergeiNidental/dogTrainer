import React from "react";

import '../../styles/accordeon/__accordeon';

export default function Accordeon({children}){

    const handleAccordeonClick = (elem) => {
        const currentTarget = elem.currentTarget;
        currentTarget.classList.toggle('active');
        const nextText = currentTarget.nextElementSibling;
        if (nextText.style.maxHeight) {
            nextText.style.maxHeight = null;
        } else {
            nextText.style.maxHeight = nextText.scrollHeight + 'px';
        }

    }
    
    return (
        <>
        <button className="accordeon" onPointerDown={handleAccordeonClick}>ПОДРОБНЕЕ ОБО МНЕ</button>
        <div className="panel" onPointerDown={handleAccordeonClick}>
            <p id="accordeon">
            {children}
            </p>
        </div>
        </>
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
  