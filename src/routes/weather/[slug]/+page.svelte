<script>
  import { Table } from "@skeletonlabs/skeleton";
  import { tableMapperValues } from "@skeletonlabs/skeleton";
  import *  as dateFns from "date-fns";
  import * as _ from "lodash";

  /** @type {import("./$types").PageData} */

  export let data;
  const name = data.name;
  const weather = data.weather;
  const sourceData = buildSourceData();
  const headers = Object.keys(sourceData[0]);
  const tableSimple = {
    head: headers,
    body: tableMapperValues(sourceData, headers)
  };

  buildSourceData();

  function getDays() {
    return weather.map(obj => {
      return dateFns.format((dateFns.parseJSON(obj.dt_txt)), "EEEE");

    });
  }

  function buildSourceData() {
    let days = getDays();
    let temps = weather.map(obj => `${obj.weather[0].main}` + "<br>" + obj.main.temp + "°F" + "<br>" + `<img src='http://openweathermap.org/img/w/${obj.weather[0].icon}.png' alt=''>`);
    let times = weather.map(obj => dateFns.format((dateFns.parseJSON(obj.dt_txt)), "hh:mm aa"));
    let sourceData = [];
    for (let i = 0; i < 8; i++) {
      sourceData.push(
        {
          time: times[i],
          [days[i]]: temps[i],
          [days[i + 8]]: temps[i + 8],
          [days[i + 16]]: temps[i + 16],
          [days[i + 24]]: temps[i + 24],
          [days[i + 32]]: temps[i + 32]

        }
      );

    }
    return sourceData;


  }

</script>


<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-8">
    <h1>5 Day Weather Forecast For {name}</h1>
    <Table class="border-separate border-spacing-2 border border-slate-200" source={tableSimple} />
  </div>
</div>