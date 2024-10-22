const Skill = ({logoTech, imageAlt, text}) => (
    <section className="skill">
        <img className="skill__image" src={logoTech} alt={imageAlt} />
        <h4 className="skill__name">{text}</h4>
    </section>
)

export default Skill