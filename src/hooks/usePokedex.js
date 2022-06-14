import {useState } from "react";

export default function usePokedex(){
    const [turn, setTurn] = useState(false)
    const [pokemonImage, setPokemonimage] = useState('')
    const [lding, setLding] = useState(false)
    // const [type, setType]
    const [pokemonId,setPokemonId] = useState('')
    const [pokemonJson, setPokemonJson] = useState([])

        const find = async (search) => {
            try {
                const poke = search.toLowerCase()
                let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`, {
                    method: "get",
                });
                const data = await resp.json()
                const printImage = data.sprites.other.dream_world.front_default
                // pokemon.current = data.id
                setPokemonId(data.id)
                console.log("console log de pokemonjson", [pokemonJson[0]])
                setLding(2)
                setTimeout(function(){
                    setLding("success")
                    setPokemonimage(printImage)
                    setPokemonJson([data])
                    
                },2000)
                            
            } catch (err) {
                console.error("Error del fetch:", err);
                setPokemonimage(false)
                setLding("err")
                
        }
        }
        const limpiar = () => {
                setPokemonimage(false)
                setPokemonId(0)
            }
        const reFind = async () => {
            try {
                console.log("consolelog de refind pokemonid", pokemonId)
                let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
                    method: "get",
                });
                const data = await resp.json()
                const printImage = data.sprites.other.dream_world.front_default
                setLding(2)
                setTimeout(function(){
                    setLding("success")
                    setPokemonJson([data])
                    setPokemonimage(printImage)
                },1000)
             } catch(err){
                console.error("Error del fetch:", err);
                setPokemonimage(false)
                setLding("err")
            }
        }
        
        

    return{
        find,
        setTurn,
        turn,
        pokemonImage,
        lding,
        limpiar,
        reFind,
        pokemonId,
        setPokemonId,
        pokemonJson
    }
}

