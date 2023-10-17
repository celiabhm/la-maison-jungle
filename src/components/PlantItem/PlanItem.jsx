import CareScale from '../CareScale/CareScale';



const PlantItem = ({ name, cover, id, water, light }) => {
    // console.log(props)
    // const id = props.id;
    // const { name, cover, id } = props
    const handleClick = (plantName) => {
        alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`);
    };

    return (
        <ul>
            <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
        </ul>
    )
}

export default PlantItem;