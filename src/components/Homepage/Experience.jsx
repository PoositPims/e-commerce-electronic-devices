import ExpBox from "./ExpBox";
import classes from "./Experience.module.css";

function Experience() {
  return (
    <div className={classes.experience}>
      <h2 className={classes.title}>
        <b>Trust the feeling</b>
      </h2>
      <div className={classes.boxes}>
        <ExpBox
          description="able to connect with many devices"
          icon="bi bi-controller"
        />
        <ExpBox description="good for all people" icon="bi bi-people-fill" />
        <ExpBox description="go with your lifestyles" icon="bi bi-cloud-sun" />
        <ExpBox description="long life expectancy" icon="bi bi-emoji-smile" />
      </div>
    </div>
  );
}

export default Experience;
