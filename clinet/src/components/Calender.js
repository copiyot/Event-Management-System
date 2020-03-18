import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  MonthAgenda,
  EventSettingsModel
} from "@syncfusion/ej2-react-schedule";
import { connect } from "react-redux";

class Calender extends React.Component {
  dates = JSON.parse(localStorage.getItem("eventDates"));

  EventSettingsModel = {
    dataSource: this.dates
  };

  render() {
    return (
      <div className="calender">
        <ScheduleComponent
          currentView="Month"
          eventSettings={this.EventSettingsModel}
        >
          <Inject services={[Day, Week, WorkWeek, Month, MonthAgenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    basicData: state.eventFormData.basicData
  };
};

export default connect(mapStateToProps)(Calender);
