
import React from "react";
import BodyComponent from "./BodyComponent";
import axios from "axios";
interface Props {
    searchParams: any;
}

async function Page(props: Props) {
    // console.log("Estos son los props", props)
    const { d, c } = props.searchParams;

    await fetch(`${process.env.URL || "http://localhost:3000"
        }/api/Login/BaseInfoUser?docente=${d}&colegio=${c}`).then((res: any) => {
            if (res.status == 200) {
                // localStorage.setItem("datosColegio", JSON.stringify(res?.data?.colegio || []))
            }
        })



    return <BodyComponent />;
}

export default Page;
