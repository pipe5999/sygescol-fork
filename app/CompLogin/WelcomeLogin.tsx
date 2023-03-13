"use client";
import React from "react";
import CompRazones from "./CompRazones";

function WelcomeLogin() {
  return (
    <>
      <div className="h-full relative text-white flex lg:flex-col items-center overflow-hidden">
        {/* ondas */}
        <div
          style={{
            transition: "500ms",
          }}
          className="waves absolute bottom-0 left-0 right-0 h-[300px] bg-blue-800"
        />
        <h2 className="text-center text-white lg:text-[4.5rem] m-auto font-medium relative">
          Bienvenido a <br />
          <b>Sygescol Online</b>
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="p-6 bg-blue-900 text-center drop-shadow-md">
          <h1 className="text-white font-medium lg:text-3xl">
            16 Razones para Elegirnos
          </h1>
        </div>
        <ul>
          <CompRazones
            image="https://media.istockphoto.com/id/1332160018/es/foto/hombre-de-negocios-que-usa-una-computadora-para-planificar-la-forma-en-que-el-logro-de.jpg?s=612x612&w=0&k=20&c=hjU54UwsBgBxsBCX2Zw_7rmWqNI2P_zAQpHYNRESrb0="
            alt="Sistema Integral"
            title="Sist. Integral"
            titleCompleto="Sistema de Gestión Integral."
          />
          <CompRazones
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2VzdGlvbiUyMGFkbWluaXN0cmF0aXZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="Gestion Guia 34."
            title="Sist. Gestión"
            titleCompleto="Sistema de Gestión según los parámetros de la Guía 34."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1394353349/es/foto/nueva-estrategia-cambios-camino-alternativo-y-mejora.jpg?s=612x612&w=0&k=20&c=v_qCPA_eec5M0OkZWsb-YUUH36uy_2PGcfu_m9JGVSg="
            alt="Adaptable"
            title="Sist. Adaptable"
            titleCompleto="Sistema de Gestión Adaptable a las nuevas políticas."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1357570149/es/foto/alumno-curioso-con-libro-de-texto-en-la-cabeza.jpg?s=612x612&w=0&k=20&c=F7AsJ8uVOWyO_8FZ5RZAZbZFxal4ngnjW6YgFJxX-jw="
            alt="Asignacion academica"
            title="Sist. Asignación"
            titleCompleto="Sistema de asignación Académica."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1338939205/es/foto/pareja-joven-usando-computadora-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=lSBil5SG08Xxjaq0KsJQRof6pvjJ6Z-ueyu0yZkJ7sU="
            alt="Trazabilidad de informacion"
            title="Sist. Trazabilidad"
            titleCompleto="Manejo y administración en la trazabilidad de la información."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1420744437/es/foto/doble-exposici%C3%B3n-de-la-empresaria-al-tacto-de-la-mano-del-negocio.jpg?s=612x612&w=0&k=20&c=Kuhx-qXtkjimHMdW9NoCCEmdk7hsRu1rKFUgvcVLpe8="
            alt="Sistema de evaluacion"
            title="Sist. Evaluación S.I.E.E.P"
            titleCompleto="Sistema de evaluación según el S.I.E.E.P."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1398834789/es/foto/empresarios-que-operan-con-el-s%C3%ADmbolo-de-servicio-superior-garant%C3%ADa-de-calidad-garant%C3%ADa.jpg?s=612x612&w=0&k=20&c=YcTy9IMkrCXUXYAgflD4uz8DMLzvfSxzqkSQ_ptm_bo="
            alt="Ley 1712"
            title="Ley 1712 del 2014"
            titleCompleto="Regidos bajo la ley 1712 del 2014."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1412099558/es/foto/concepto-de-derechos-de-autor-o-patente-persona-a-mano-usando-computadora-port%C3%A1til-en-el.jpg?s=612x612&w=0&k=20&c=H5bqZQPKgGwDsI84c7AcTfGogAD55KO1hm3vFF_7vzw="
            alt="Validacion"
            title="Sist. De Validación"
            titleCompleto="Sistema de Validación de información a través de la norma."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1354524435/es/foto/mujer-afroamericana-emocionada-sosteniendo-y-mirando-la-computadora-port%C3%A1til-mientras-est%C3%A1.jpg?s=612x612&w=0&k=20&c=mZwnLSX9-3Z8rrS-tlFOdNipVhoyhaRgaEzsqXGXQvU="
            alt="Plataformas web"
            title="Manejo de Plataforma Web"
            titleCompleto="Manejo y Administración de plataforma web Para Instituciones."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1193325003/es/foto/concepto-de-seguridad-cibern%C3%A9tica.jpg?s=612x612&w=0&k=20&c=F_IwnMdpnpUJ0Rqeg2daQd8o8kYsHtVkDpGVmyVOsUg="
            alt="Habeas Data"
            title="Sist. Habeas Data"
            titleCompleto="Sistema de protección de datos a terceros Que usan Sygescol."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1419658043/es/foto/n%C3%BAmero-azul-cero-plegable-sobre-fondo-amarillo.jpg?s=612x612&w=0&k=20&c=gkyctlLi5voBlyhxz13fFyJp124f3Q3AKt5HL6R66jY="
            alt="Cero papel"
            title="Políticas de Cero Papel"
            titleCompleto="Acogemos la política cero papel."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1368562813/es/foto/cuerpo-entero-de-joven-%C3%A1rabe-usando-tablet-pc-mostrando-un-gesto-de-aprobaci%C3%B3n-recomendando.jpg?s=612x612&w=0&k=20&c=9EGwoEsWnAoSc0ibVylsXMA70WU1Sv48IsVDKdXfDt8="
            alt="Automatizacion"
            title="Sist. Automatización"
            titleCompleto="Sistema de automatización de procesos con Sygescol."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1420863997/es/foto/sap-software-de-automatizaci%C3%B3n-de-procesos-de-negocio-y-software-de-gesti%C3%B3n-persona.jpg?s=612x612&w=0&k=20&c=EZiMawo_rS2xexB4kFlBuOAyxoV6BMLNUgOS4lyKScE="
            alt="Organismo de control"
            title="Organismos de Control"
            titleCompleto="Enlace directo con organismos de control para regular el flujo de información."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1215883716/es/foto/normas-de-escala-de-la-ley.jpg?s=612x612&w=0&k=20&c=P1SRqvbeNBdBOjRx1koF4B4dWX6uJEjYoMPXj077jMs="
            alt="Ley 1581"
            title="Ley 1581 del 2012"
            titleCompleto="Regidos bajo la ley 1581 del 2012."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/143071446/es/foto/estudiantes-trabajan-en-la-biblioteca-en-la-noche.jpg?s=612x612&w=0&k=20&c=1F7F2AAQ640JD6hr-iiS0e9gZopFxzqYRXAOSYEbBeo="
            alt="Sistema de evaluacion"
            title="Sist. De Evaluación Académica"
            titleCompleto="Sistema de Evaluación y promoción académica."
          />
          <CompRazones
            image="https://media.istockphoto.com/id/1353696064/es/foto/emocionada-chica-estudiante-con-gafas-de-mezclilla-mochila-aislada-sobre-fondo-rosa-pastel.jpg?s=612x612&w=0&k=20&c=QU-7Ig3JS8S_vyjNPcpl49qHpxXtp4__-daeNZYrGm4="
            alt="Aceleración"
            title="Sist. De Aceleración"
            titleCompleto="Sistema de Aceleración Por ciclo académico."
          />
        </ul>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        ul {
          padding: 0;
          margin: 0;
          display: block;
          width: 100%;
          overflow-y: hidden;
          overflow-x: auto;
          white-space: nowrap;
          text-align: center;
          scroll-behavior: smooth;
        }

        /* ========================= */
         {
          /* .waves {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background-color: #04072b;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
          transition: 500ms;
        } */
        }

        .waves::before,
        .waves::after {
          content: "";
          position: absolute;
          width: 300vw;
          height: 300vw;
          top: -65vw;
          left: 50%;
          transform: translate(-50%, -75%);
        }

        .waves::before {
          border-radius: 44%;
          background: #183283;
          animation: waves 8s linear infinite;
        }

        .waves::after {
          border-radius: 44%;
          background: #0e215c;
          animation: waves 15s linear infinite;
        }

        @keyframes waves {
          0% {
            transform: translate(-50%, -75%) rotate(0deg);
          }

          100% {
            transform: translate(-50%, -75%) rotate(360deg);
          }

          .hide {
            display: none;
            transition: visibility 15s, opacity 0.5s linear;
          }

          .myDIV:hover + .hide {
            display: block;
            color: white;
          }

          .enter-right {
            transition: opacity 0.5 ease-out, transform 0.5s ease-out;
          }
        }
      `}</style>
    </>
  );
}

export default WelcomeLogin;
