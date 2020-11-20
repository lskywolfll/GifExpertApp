const { shallow } = require("enzyme")
const { default: GridGifItem } = require("../../components/Category/GridGifItem")


describe('Pruebas en<GifGridItem />', () => {

    test('debe de mostrar el componente correctamente', () => {

        const wrapper = shallow(<GridGifItem />);
        expect(wrapper).toMatchSnapshot();
    })

})
