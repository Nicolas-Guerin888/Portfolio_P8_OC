import Skill from "../Skill/Skill"
import logoJS from "../../assets/javascript.png"

const Skills = () => (
    <>
        <section className="skills">
            <h2 className="skills__title">MES COMPÉTENCES</h2>
            <div className="skills__acquired">
                <Skill logoTech={logoJS} imageAlt="Logo du langage HTML 5" text="HTML 5" />
                <Skill logoTech={logoJS} imageAlt="Logo du langage CSS 3" text="CSS 3" />
                <Skill logoTech={logoJS} imageAlt="Logo du langage JavaScript" text="JavaScript" />
                <Skill logoTech={logoJS} imageAlt="Logo React" text="REACT" />
                <Skill logoTech={logoJS} imageAlt="Logo Node JS" text="Node.JS" />
                <Skill logoTech={logoJS} imageAlt="Logo Sass SCSS" text="Sass SCSS" />
                <Skill logoTech={logoJS} imageAlt="Logo Babel" text="Babel" />
                <Skill logoTech={logoJS} imageAlt="Logo Webpack" text="Webpack" />
                <Skill logoTech={logoJS} imageAlt="Logo Express" text="Express" />
                <Skill logoTech={logoJS} imageAlt="Logo Mongo DB" text="MongoDB" />
            </div>
            <div className="skills__futureSkills">
                <strong>Compétence(s) en cours d'acquisition</strong>
                <Skill logoTech={logoJS} imageAlt="Logo tailwindcss" text="Tailwind" />
                <div className="skills__futureSkills--layout ">
                    <Skill logoTech={logoJS} imageAlt="Logo du langage Java" text="JAVA" />
                    <Skill logoTech={logoJS} imageAlt="Logo du langage TypeScript" text="TypeScript" />
                </div>
            </div>
        </section>
    </>
)

export default Skills