import ToggleTheme from "components/ToggleTheme";
import WithHeader from "components/shared/WithHeader";

const Profile = () => {
  return (
    <WithHeader title="Profile" disableBack>
      <div className="grid h-full place-content-center">
        <ToggleTheme />
      </div>
    </WithHeader>
  );
};

export default Profile;
