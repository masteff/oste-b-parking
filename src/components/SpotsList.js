import React from 'react'
import { connect } from 'react-redux'
import Spot from './Spot'



export const SpotsList = ({ floor, spots, filters, uid, hasspot }) => (
    floor === 'u1' ? (<div className='grid-layout'>
        <div className='grid-item spot-vert-x'>5</div>
        <div className='grid-item spot-vert-x'>6</div>
        <Spot {...spots[6]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>8</div>
        <div className='grid-item spot-vert-x'>9</div>
        <div className='grid-item spot-vert-x'>10</div>
        <Spot {...spots[10]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[11]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[12]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>14</div>
        <div className='grid-item spot-vert-x'>15</div>
        <div className="grid-item spot-vert-x"></div>
        <div className='grid-item spot-vert-x'>16</div>
        <Spot {...spots[16]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>18</div>
        <div className="grid-item spot-vert-x" style={{writingMode:'vertical-lr'}}>Aufzug</div>
        <div className="grid-item span-4-2"></div>
        <div className="grid-item span-20-2">Strasse</div>
        <div className='grid-item spot-vert-x'>1</div>
        <Spot {...spots[1]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>3</div>
        <div className='grid-item spot-vert-x'>4</div>
        <Spot {...spots[83]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className="grid-item span-1-10" style={{writingMode:'vertical-lr'}}>Strasse</div>
        <div className="grid-item span-4-1"></div>
        <div className="grid-item span-1-10"></div>
        <div className="grid-item span-4-1"></div>
        <div className="grid-item span-2-10" style={{writingMode:'vertical-lr'}}>Strasse</div>
        <div className="grid-item span-2-4"></div>
        <div className='grid-item spot-horz-x'>83</div>
        <div className="grid-item spot-horz-x"></div>
        <div className="grid-item spot-horz-x"></div>
        <div className="grid-item spot-horz-x"></div>
        <div className="grid-item spot-horz-x"></div>
        <div className="grid-item span-4-6"></div>
        <div className='grid-item spot-horz-x'>82</div>
        <Spot {...spots[75]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[67]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[60]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[18]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className='grid-item spot-horz-x'>81</div>
        <div className='grid-item spot-horz-x'>75</div>
        <div className='grid-item spot-horz-x'>67</div>
        <Spot {...spots[59]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[19]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className='grid-item spot-horz-x'>80</div>
        <Spot {...spots[73]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className='grid-item spot-horz-x'>66</div>
        <Spot {...spots[58]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[20]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className='grid-item spot-horz-x'>27</div>
        <div className='grid-item spot-horz-x'>79</div>
        <div className='grid-item spot-horz-x'>73</div>
        <div className='grid-item spot-horz-x'>65</div>
        <Spot {...spots[57]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[21]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className='grid-item spot-horz-x'>28</div>
        <div className="grid-item spot-horz-x"></div>
        <Spot {...spots[71]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className="grid-item spot-horz-x">Technik</div>
        <Spot {...spots[56]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[22]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[28]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[77]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[70]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className="grid-item spot-horz-x">64</div>
        <Spot {...spots[55]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[23]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[29]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[49]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[50]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[51]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>53</div>
        <Spot {...spots[76]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[69]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className="grid-item spot-horz-x">63</div>
        <Spot {...spots[54]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[24]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className="grid-item spot-horz-x">31</div>
        <div className="grid-item spot-horz-x"></div>
        <div className="grid-item spot-horz-x">69</div>
        <Spot {...spots[61]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[53]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[25]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <Spot {...spots[31]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
        <div className="grid-item span-20-1">Strasse</div>
        <Spot {...spots[47]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[46]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>46</div>
        <div className='grid-item spot-vert-x'>45</div>
        <Spot {...spots[43]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[42]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'>42</div>
        <Spot {...spots[40]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[39]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[38]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className='grid-item spot-vert-x'style={{writingMode:'vertical-lr'}}>Aufzug</div>
        <div className='grid-item spot-vert-x'></div>
        <Spot {...spots[37]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[36]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[35]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[34]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[33]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <Spot {...spots[32]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
        <div className="grid-item span-2-2"></div>
    </div>)
        :
        (<div className='grid-layout--u2'>
            <div className="grid-item span-4-2"></div>
            <Spot {...spots[145]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[144]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <div className='grid-item spot-vert-x'>144</div>
            <div className='grid-item spot-vert-x'>143</div>
            <div className='grid-item spot-vert-x'>142</div>
            <div className='grid-item spot-vert-x'>141</div>
            <div className='grid-item spot-vert-x'>140</div>
            <div className='grid-item spot-vert-x'>139</div>
            <div className='grid-item spot-vert-x'>138</div>
            <div className='grid-item spot-vert-x'>137</div>
            <div className='grid-item spot-vert-x'>136</div>
            <div className='grid-item spot-vert-x'>135</div>
            <div className='grid-item spot-vert-x'>134</div>
            <div className='grid-item spot-vert-x'>133</div>
            <div className='grid-item spot-vert-x'style={{writingMode:'vertical-lr'}}>Aufzug</div>
            <div className="grid-item span-4-2"></div>
            <Spot {...spots[146]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
            <div className="grid-item span-19-2">Strasse</div>
            <div className='grid-item spot-horz-x'>132</div>
            <Spot {...spots[147]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-horz-o' />
            <div className='grid-item spot-horz-x'>131</div>
            <div className="grid-item span-2-8" style={{writingMode:'vertical-lr'}}>Auffahrt</div>
            <div className='grid-item spot-vert-x'>149</div>
            <div className='grid-item spot-vert-x'>150</div>
            <div className='grid-item spot-vert-x'>151</div>
            <div className='grid-item spot-vert-x'>152</div>
            <div className='grid-item spot-horz-x'>153</div>
            <div className="grid-item span-1-8" style={{writingMode:'vertical-lr'}}>Strasse</div>
            <div className='grid-item spot-horz-x'>161</div>
            <div className='grid-item spot-horz-x'>153</div>
            <div className="grid-item span-1-8" style={{writingMode:'vertical-lr'}}>Strasse</div>
            <div className='grid-item spot-horz-x'>177</div>
            <div className='grid-item spot-horz-x'>130</div>
            <div className="grid-item span-3-8" style={{writingMode:'vertical-lr'}}>Strasse</div>
            <div className="grid-item span-2-3"></div>
            <div className='grid-item spot-horz-x'>154</div>
            <div className='grid-item spot-horz-x'>162</div>
            <div className='grid-item spot-horz-x'>170</div>
            <div className='grid-item spot-horz-x'>178</div>
            <div className='grid-item spot-horz-x'>129</div>
            <div className="grid-item span-4-4"></div>
            <div className='grid-item spot-horz-x'>155</div>
            <div className='grid-item spot-horz-x'>163</div>
            <div className='grid-item spot-horz-x'>171</div>
            <div className='grid-item spot-horz-x'>179</div>
            <div className='grid-item spot-horz-x'>128</div>
            <div className='grid-item spot-horz-x'>156</div>
            <div className='grid-item spot-horz-x'>164</div>
            <div className='grid-item spot-horz-x'>172</div>
            <div className='grid-item spot-horz-x'>180</div>
            <div className='grid-item spot-horz-x'>127</div>
            <div className='grid-item spot-horz-x'>122</div>
            <div className='grid-item spot-horz-x'>157</div>
            <div className='grid-item spot-horz-x'>165</div>
            <div className='grid-item spot-horz-x'>173</div>
            <div className='grid-item spot-horz-x'>181</div>
            <div className='grid-item spot-horz-x'>126</div>
            <div className='grid-item spot-horz-x'>121</div>
            <div className='grid-item spot-horz-x'>158</div>
            <div className='grid-item spot-horz-x'>166</div>
            <div className='grid-item spot-horz-x'>174</div>
            <div className='grid-item spot-horz-x'>182</div>
            <div className='grid-item spot-horz-x'>125</div>
            <div className='grid-item spot-horz-x'>120</div>
            <Spot {...spots[187]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[186]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[185]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <div className='grid-item spot-vert-x'>185</div>
            <div className='grid-item spot-horz-x'>159</div>
            <div className='grid-item spot-horz-x'>167</div>
            <div className='grid-item spot-horz-x'>175</div>
            <div className='grid-item spot-horz-x'>183</div>
            <div className='grid-item spot-horz-x'>124</div>
            <div className='grid-item spot-horz-x'>119</div>
            <div className='grid-item spot-horz-x'>160</div>
            <div className='grid-item spot-horz-x'>168</div>
            <div className='grid-item spot-horz-x'>176</div>
            <div className='grid-item spot-horz-x'>184</div>
            <div className='grid-item spot-horz-x'>123</div>
            <div className='grid-item spot-horz-x'>118</div>
            <div className="grid-item span-21-2">Strasse</div>
            <div className='grid-item spot-horz-x'>117</div>
            <div className='grid-item spot-horz-x'></div>
            <div className="grid-item span-3-2"></div>
            <div className='grid-item spot-vert-x'>101</div>
            <div className='grid-item spot-vert-x'>102</div>
            <Spot {...spots[102]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <div className='grid-item spot-vert-x'>104</div>
            <Spot {...spots[104]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[105]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[106]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[107]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <Spot {...spots[108]} {...filters} uid={uid} hasspot={hasspot} layout='grid-item spot-vert-o' />
            <div className='grid-item spot-vert-x'style={{writingMode:'vertical-lr'}}>Aufzug</div>
            <div className='grid-item spot-vert-x'></div>
            <div className='grid-item spot-vert-x'>110</div>
            <div className='grid-item spot-vert-x'>111</div>
            <div className='grid-item spot-vert-x'>112</div>
            <div className='grid-item spot-vert-x'>113</div>
            <div className='grid-item spot-vert-x'>114</div>
            <div className='grid-item spot-vert-x'>115</div>
            <div className='grid-item spot-vert-x'>116</div>
            <div className="grid-item span-2-2"></div>
        </div>)
)

const mapStateToProps = (state) => {
    return {
        spots: state.spots,
        filters: state.filters,
        uid: state.auth.uid,
        hasspot: state.auth.hasspot
    }
}

export default connect(mapStateToProps)(SpotsList)

