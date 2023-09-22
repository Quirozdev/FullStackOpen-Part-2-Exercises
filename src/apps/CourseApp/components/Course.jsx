const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

const Total = ({ parts }) => {
  function getTotalExercises() {
    return parts.reduce((acc, current) => {
      return acc + current.exercises;
    }, 0);
  }

  return <h3>total of {getTotalExercises()} exercises</h3>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
