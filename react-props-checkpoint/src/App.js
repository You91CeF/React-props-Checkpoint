import Profile from './Profile/Profile';

const App = () => {
  const handleName = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <Profile
      fullName="Sanji Vinsmoke"
      bio="Kuro Hachi"
      profession="Cook"
      handleName={handleName}
    >
      <img src="https://pbs.twimg.com/media/EmTE4QsXMAAyAm_?format=jpg&name=medium" width={500} alt="Profile image" />

    </Profile>
  );
};

export default App;