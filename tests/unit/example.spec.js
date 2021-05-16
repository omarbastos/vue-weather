import { mount } from "@vue/test-utils";
import WeatherCard from "@/components/WeatherCard";

describe("weatherComputed Mixin", () => {
  it("Give a API response and extract icon, description", () => {
    const wrapper = mount(WeatherCard, {
      propsData: {
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
      },
    });

    expect(wrapper.text()).toContain("overcast clouds");

    expect(wrapper.vm.weatherIcon).toBe(
      "http://openweathermap.org/img/wn/04n@2x.png"
    );
  });
});
