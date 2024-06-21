import Header from "../../dashcomponent/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Notification() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const notify = {
    background: colors.primary[400],
  };

  const notifyHead = {
    color: colors.greenAccent[500],
  };

  const notifyData = [
    {
      title: "Incoming profit alert",
      text: `a sum of $310 would be added to your profit balance in 3 days (21/05/2024) ${(
        <br />
      )}
            for more info contact our support team`,
    },
    {
      title: "New Update",
      text: `update 2.7.1 has been release, please visit our store and get it`,
    },
    {
      title: "Incoming profit alert",
      text: `a sum of $310 would be added to your profit balance in 3 days (21/05/2024) ${(
        <br />
      )}
            for more info contact our support team`,
    },
    {
      title: "Incoming profit alert",
      text: `a sum of $310 would be added to your profit balance in 3 days (21/05/2024) ${(
        <br />
      )}
            for more info contact our support team`,
    },
  ];

  const showNotifications = notifyData.map((each) => {
    return (
      <div className="notify" style={notify}>
        <div className="inner-notify">
          <h1 style={notifyHead}>{each.title}</h1>
          <p>{each.text}</p>
        </div>
        <input type="checkbox" className="checker" />
      </div>
    );
  });

  return (
    <div className="notification">
      <Header title="Notifications" subtitle="get notified" />
      <div className="notification-box">
        <h3
          style={{
            marginTop: "1.2rem",
            textAlign: "center",
          }}
          className=""
        >
          No notification yet
        </h3>
      </div>
    </div>
  );
}

export default Notification;
