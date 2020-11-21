const { shallow } = require("enzyme")
const { default: GridGifItem } = require("../../components/Category/GridGifItem")


describe('Pruebas en<GifGridItem />', () => {

    const props = {
        title: "Un titulo",
        url: "https://localhost/algo.jpg"
    };

    const wrapper = shallow(<GridGifItem {...props} />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(props.title);
    })

    test('debe de tener la imagen igual al url y alt del titulo', () => {
        const img = wrapper.find('img');

        expect(img.prop("src")).toBe(props.url);
        expect(img.prop("alt")).toBe(props.title);
    })

    test('should debe de tener un animate__bounceInUp', () => {
        const div = wrapper.find('div');
        const nameClass = "animate__bounceInUp";

        expect(div.prop('className').includes(nameClass)).toBe(true);
    })

})
