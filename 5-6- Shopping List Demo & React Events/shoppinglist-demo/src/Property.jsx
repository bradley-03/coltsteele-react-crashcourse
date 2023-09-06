export default function Property ({data}) {
    return (
        <div>
            <h2>{data.name}</h2>
            <h3>£{data.price} a night</h3>
            <h4>⭐️ {data.rating}</h4>
        </div>
    )
}