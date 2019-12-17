import React from 'react'
import {connect} from 'react-redux'
import Spot from './Spot'


export const SpotsList = ({floor,spots,filters,uid}) => (
    <div className='grid-layout'>
        <div className='grid-item spot-vert-x'>5</div>
        <div className='grid-item spot-vert-x'>6</div>
        <Spot {...spots.find((spot) => spot.number == 7)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>8</div>
        <div className='grid-item spot-vert-x'>9</div>
        <div className='grid-item spot-vert-x'>10</div>
        <Spot {...spots.find((spot) => spot.number == 11)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 12)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 13)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>14</div>
        <div className='grid-item spot-vert-x'>15</div>
        <div className="grid-item spot-vert-x">p</div>
        <div className='grid-item spot-vert-x'>16</div>
        <Spot {...spots.find((spot) => spot.number == 17)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>18</div>
        <div className="grid-item spot-vert-x">Auf</div>
        <div className="grid-item span-2-2">p</div>
        <div className="grid-item span-2-2">p</div>
        <div className="grid-item span-20-2">Street</div>
        <div className='grid-item spot-vert-x'>1</div>
        <div className='grid-item spot-vert-x'>2</div>
        <Spot {...spots.find((spot) => spot.number == 3)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>4</div>
        <Spot {...spots.find((spot) => spot.number == 84)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className="grid-item span-1-10">str</div>
        <div className="grid-item span-4-1">p</div>
        <div className="grid-item span-1-10">p</div>
        <div className="grid-item span-4-1">p</div>
        <div className="grid-item span-2-10">str</div>
        <div className="grid-item span-2-4">x</div>
        <div className='grid-item spot-horz-x'>83</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item span-4-6">p</div>
        <div className='grid-item spot-horz-x'>82</div>
        <Spot {...spots.find((spot) => spot.number == 76)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 68)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 61)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 19)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>81</div>
        <div className='grid-item spot-horz-x'>75</div>
        <div className='grid-item spot-horz-x'>67</div>
        <Spot {...spots.find((spot) => spot.number == 60)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 20)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>80</div>
        <Spot {...spots.find((spot) => spot.number == 74)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>66</div>
        <Spot {...spots.find((spot) => spot.number == 59)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 21)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>27</div>
        <div className='grid-item spot-horz-x'>79</div>
        <div className='grid-item spot-horz-x'>73</div>
        <div className='grid-item spot-horz-x'>65</div>
        <Spot {...spots.find((spot) => spot.number == 58)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 22)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className='grid-item spot-horz-x'>28</div>
        <div className="grid-item spot-horz-x">p</div>
        <Spot {...spots.find((spot) => spot.number == 72)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">Technik</div>
        <Spot {...spots.find((spot) => spot.number == 57)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 23)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 29)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 78)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 71)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">64</div>
        <Spot {...spots.find((spot) => spot.number == 56)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 24)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 30)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 50)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 51)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 52)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>53</div>
        <Spot {...spots.find((spot) => spot.number == 77)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 70)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">63</div>
        <Spot {...spots.find((spot) => spot.number == 55)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 25)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className="grid-item spot-horz-x">31</div>
        <div className="grid-item spot-horz-x">p</div>
        <div className="grid-item spot-horz-x">69</div>
        <Spot {...spots.find((spot) => spot.number == 62)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 54)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 26)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <Spot {...spots.find((spot) => spot.number == 32)} {...filters} uid={uid} layout='grid-item spot-horz-o'/>
        <div className="grid-item span-20-1">39</div>
        <Spot {...spots.find((spot) => spot.number == 48)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 47)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>46</div>
        <div className='grid-item spot-vert-x'>45</div>
        <Spot {...spots.find((spot) => spot.number == 44)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 43)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>42</div>
        <Spot {...spots.find((spot) => spot.number == 41)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 40)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 39)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div className='grid-item spot-vert-x'>Au</div>
        <div className='grid-item spot-vert-x'>p</div>
        <Spot {...spots.find((spot) => spot.number == 38)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 37)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 36)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 35)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 34)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <Spot {...spots.find((spot) => spot.number == 33)} {...filters} uid={uid} layout='grid-item spot-vert-o'/>
        <div class="grid-item span-2-2">p</div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        spots: state.spots,
        filters: state.filters,
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(SpotsList)

