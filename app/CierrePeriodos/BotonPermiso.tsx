// import { Fragment, useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

// import TablaAutori from "./TablaAutori";

// const BotonPermiso = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(!open);
//   return (
//     <>
//       <Fragment>
//         <Button onClick={handleOpen} variant="gradient">
//           Ver Permisos Solicitados
//         </Button>
//         <Dialog
//           open={open}
//           handler={handleOpen}
//           animate={{
//             mount: { scale: 1, y: 0 },
//             unmount: { scale: 0.9, y: -100 },
//           }}
//         >
//           <DialogHeader>Permisos Solicitados.</DialogHeader>
//           <DialogBody divider>
//             <TablaAutori />
//           </DialogBody>

//           <DialogFooter>
//             {/* <Button
//               variant="text"
//               color="red"
//               onClick={handleOpen}
//               className="mr-1"
//             >
//               <span>Cancel</span>
//             </Button> */}
//             <Button variant="gradient" color="green" onClick={handleOpen}>
//               <span>Actualizar</span>
//             </Button>
//           </DialogFooter>
//         </Dialog>
//       </Fragment>
//     </>
//   );
// };

// export default BotonPermiso;

import { Fragment, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import TablaAutori from "./TablaAutori";

const BotonPermiso = () => {
  return (
    <>
      <Fragment>
        <Menu>
          <MenuHandler>
            <Button variant="gradient">Ver Permisos Solicitados</Button>
          </MenuHandler>
          <MenuList>
            <TablaAutori />
          </MenuList>
        </Menu>
      </Fragment>
    </>
  );
};

export default BotonPermiso;
