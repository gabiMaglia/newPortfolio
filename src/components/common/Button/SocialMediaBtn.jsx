const SocialMediaBtn = (props) => {
  const  {mode, fontAwsome, href} = props
  return (
    <a target="blank" href={href}>
        <button className={`btn btn-outline-${mode} me-2`}>
          <i className={fontAwsome}></i>
        </button>
    </a>
  );
};

export default SocialMediaBtn;
