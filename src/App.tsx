import React from 'react';
import './App.css';
import ColorClothes from './components/ColorClothes';
import Size from './components/Size';
import Color from './components/Color';
import Gender from './components/Gender';
import Collection from './components/Collection';
import Header from './components/Header';
import Description from "./components/Description";

import a from "./components/images1/a.webp";
import b from "./components/images1/b.webp";
import c from "./components/images1/c.webp";
import d from "./components/images1/d.webp";
import e from "./components/images1/e.webp";
import f from "./components/images1/f.webp";
import g from "./components/images1/g.webp";
import h from "./components/images1/h.webp";
import i from "./components/images1/i.webp";
import j from "./components/images1/j.webp";
import k from "./components/images1/k.webp";
import l from "./components/images1/l.webp";
import m from "./components/images1/m.webp";
import n from "./components/images1/n.webp";
import o from "./components/images1/o.webp";
import p from "./components/images1/p.webp";
import q from "./components/images1/q.webp";
import r from "./components/images1/r.webp";
import s from "./components/images1/s.webp";
import t from "./components/images1/t.webp";
import u from "./components/images1/u.webp";
import v from "./components/images1/v.webp";
import w from "./components/images1/w.webp";
import x from "./components/images1/x.webp";
import y from "./components/images1/y.webp";
import z from "./components/images1/z.webp";
import aa from "./components/images1/aa.webp";
import bb from "./components/images1/bb.webp";
import cc from "./components/images1/cc.webp";
import dd from "./components/images1/dd.webp";
import ee from "./components/images1/ee.webp";
import ff from "./components/images1/ff.webp";

import _a1 from "./components/images1/_a1.webp";
import _a2 from "./components/images1/_a2.webp";
import _a3 from "./components/images1/_a3.webp";
import _a4 from "./components/images1/_a4.webp";
import _a5 from "./components/images1/_a5.webp";
import _a6 from "./components/images1/_a6.webp";
import _a7 from "./components/images1/_a7.webp";
import _a8 from "./components/images1/_a8.webp";
import _a9 from "./components/images1/_a9.webp";
import _a10 from "./components/images1/_a10.webp";
import _a11 from "./components/images1/_a11.webp";
import _a11a from "./components/images1/_a11a.webp";
import _a12 from "./components/images1/_a12.webp";
import _a13 from "./components/images1/_a13.webp";
import _a14 from "./components/images1/_a14.webp";
import _a14a from "./components/images1/_a14a.webp";
import _a15 from "./components/images1/_a15.webp";
import _a16 from "./components/images1/_a16.webp";
import _a17 from "./components/images1/_a17.webp";
import _a17a from "./components/images1/_a17a.webp";
import _a18 from "./components/images1/_a18.webp";
import _a19 from "./components/images1/_a19.webp";
import _a20 from "./components/images1/_a20.webp";
import _a21 from "./components/images1/_a21.webp";
import _a22 from "./components/images1/_a22.webp";
import _a23 from "./components/images1/_a23.webp";
import _a24 from "./components/images1/_a24.webp";
import _a25 from "./components/images1/_a25.webp";
import _a26 from "./components/images1/_a26.jpg";
import _a27 from "./components/images1/_a27.jpg";
import _a28 from "./components/images1/_a28.jpg";
import _a29 from "./components/images1/_a29.jpg";

function App()
{

  const colorClothesProps = {
    a: a,
    b: b,
    c: c,
    d: d,
    description: "Camiseta en Algodón",
    colorTile: ['#e4dad2', '#f4bc4b', '#1a9cb6', '#b2814d'],
    worth: "$190.000",
  };

  const aComponentProps = {
    a: e,
    b: f,
    c: g,
    d: h,
    description: "Camiseta en Seda",
    colorTile: ['#f1f1f1', '#813c44','#2f5048','#171717'],
    worth: "$185.000",
  };

  const bComponentProps = {
    a: i,
    b: j,
    c: k,
    d: l,
    description: "Camiseta en Lino",
    colorTile: ['#a69e7d', '#b3b3b0','#1c1c1c','#433b35'],
    worth: "$210.900",
  };

  const cComponentProps = {
    a: m,
    b: n,
    c: o,
    d: p,
    description: "Camiseta en V Lino",
    colorTile: ['#e9e9e9', '#514c33','#cfbfa6','#adafa5'],
    worth: "$425.900",
  };

  const dComponentProps = {
    a: q,
    b: r,
    c: s,
    d: t,
    description: "Camisa en Cañamo",
    colorTile: ['#9e9c8c', '#85c8cf','#9babc4','#d57487'],
    worth: "$459.900",
  };

  const eComponentProps = {
    a: u,
    b: v,
    c: w,
    d: x,
    description: "Polo en Seda",
    colorTile: ['#e5e4d2', '#aacabf','#929cbb','#f1ceba'],
    worth: "$319.900",
  };

  const fComponentProps = {
    a: y,
    b: z,
    c: aa,
    d: bb,
    description: "Polo en Lino",
    colorTile: ['#d2d0cc', '#ba7439','#3d4f4d','#1c1c1c'],
    worth: "$180.999",
  };

  const gComponentProps = {
    a: cc,
    b: dd,
    c: ee,
    d: ff,
    description: "Polo en Algodón",
    colorTile: ['#9b8570', '#302f3b','#c49385','#69919e'],
    worth: "$249.900",
  };

  const hComponentProps = {
    a: _a1,
    b: _a2,
    c: _a3,
    d: _a4,
    description: "Polo en Seda",
    colorTile: ['#ad2148', '#adc3d9','#d5c9bb','#121217'],
    worth: "$319.900",
  };

  const iComponentProps = {
    a: _a5,
    b: _a6,
    c: _a7,
    d: _a8,
    description: "Polo en Lino",
    colorTile: ['#fffff6', '#161618','#0a382c','#d1c8ba'],
    worth: "$180.999",
  };

  const jComponentProps = {
    a: _a9,
    b: _a10,
    c: _a11,
    d: _a11a,
    description: "Polo en Algodón",
    colorTile: ['#a7ba99', '#d3bab3','#f0e8e4','#dfbae3'],
    worth: "$249.900",
  };

  const kComponentProps = {
    a: _a12,
    b: _a13,
    c: _a14,
    d: _a14a,
    description: "Polo en Seda",
    colorTile: ['#dacfc8', '#98bdc5','#08080b','#e5e6e3'],
    worth: "$319.900",
  };

  const lComponentProps = {
    a: _a15,
    b: _a16,
    c: _a17,
    d: _a17a,
    description: "Polo en Lino",
    colorTile: ['#dce5ee', '#b5b2ae','#585965','#c4bcac'],
    worth: "$180.999",
  };

  const mComponentProps = {
    a: _a18,
    b: _a19,
    c: _a20,
    d: _a21,
    description: "Polo en Algodón",
    colorTile: ['#665542', '#e5e7eb','#3a75cd','#bb6991'],
    worth: "$249.900",
  };

  const nComponentProps = {
    a: _a22,
    b: _a23,
    c: _a24,
    d: _a25,
    description: "Polo en Algodón",
    colorTile: ['#38393e', '#a58e63','#e7e7e7','#dbd6ca'],
    worth: "$249.900",
  };

  const oComponentProps = {
    a: _a26,
    b: _a27,
    c: _a28,
    d: _a29,
    description: "Polo en Lino",
    colorTile: ['#b3c2af', '#e9c653','#46486b','#d9a697'],
    worth: "$180.999",
  };
  
  return (
    <div className="App">
      <div className='main-container'>
          <div className='first-container'>
            <Header/>
          </div>
          <div className='second-container'>
            <Description/>
          </div>
          <div className='third-container'>
            <div className='filters'>
              <div className='collection'>
                <Collection/>
              </div>
              <div className='gender'>
                 <Gender/>
              </div>
              <div className='size'>
                 <Size/>
              </div>
              <div className='color-select-option'>
                 <Color/>
              </div>
            </div>
            <div className='option-color-images'>
              <ColorClothes {...colorClothesProps} />              
              <ColorClothes {...iComponentProps} />
              <ColorClothes {...aComponentProps} />
              <ColorClothes {...jComponentProps} />
              <ColorClothes {...bComponentProps} />
              <ColorClothes {...kComponentProps} />
              <ColorClothes {...cComponentProps} />
              <ColorClothes {...lComponentProps} />
              <ColorClothes {...dComponentProps} />
              <ColorClothes {...mComponentProps} />
              <ColorClothes {...eComponentProps} />
              <ColorClothes {...nComponentProps} />
              <ColorClothes {...fComponentProps} />
              <ColorClothes {...oComponentProps} />
              <ColorClothes {...gComponentProps} />
              <ColorClothes {...hComponentProps} />
            </div>           
          </div>
      </div>
    </div>
  );
}

export default App;
