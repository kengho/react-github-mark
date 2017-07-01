import React, { Component } from 'react';
import { render } from 'react-dom';

import GithubMark from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <GithubMark
          href="http://www.example.com/default"
        />
        <GithubMark
          href="http://www.example.com/top-left"
          position="top-left"
          padding="32px-64px"
          light
        />
        <GithubMark
          href="http://www.example.com/top-right"
          position="top-right"
        />
        <GithubMark
          href="http://www.example.com/bottom-left"
          position="bottom-left"
        />
        <GithubMark
          href="http://www.example.com/bottom-right"
          position="bottom-right"
        />
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'black',
        }}></div>
        Lorem ipsum dolor sit amet, veniam laboramus vel ne, quo eirmod percipit ne, eum id viris adipisci. In probatus pertinacia pri, meis albucius mel ei, mel ut minimum interesset. Pro in essent iudicabit conceptam, eu lobortis splendide pertinacia vel. No est modus phaedrum, simul veritus accommodare per ea, senserit mnesarchum ea eum. Mei ad nihil torquatos, ex cum soluta vocibus aliquando. Ut aeterno appareat persequeris pri. Adipisci theophrastus eam ei, fuisset corpora intellegat ea mel. Ut usu debet essent, an usu habeo offendit partiendo, veritus maiorum neglegentur ad mea. Et augue legere ocurreret qui. An probo luptatum dissentias vix, sit te labore ancillae incorrupte. Libris accommodare ea ius, per id iudico prodesset. Atomorum contentiones signiferumque pro at. Reprimique reprehendunt ut mei, nemore persius eripuit vix in. Ex vix petentium cotidieque, brute melius indoctum vis ad. Et qui enim omittantur. Zril deserunt splendide eum ut, has te graece mucius, pri paulo affert interpretaris in. Ei prodesset abhorreant honestatis sea, eu per dolorem facilis legendos. Vis magna velit ancillae et. Vim magna tollit ne, mel id regione voluptatibus. Habeo quaeque scriptorem cu mea, nostro putant ex quo. Pro id dicat ignota sententiae, duo et indoctum sadipscing. Usu id eius aperiam complectitur. Te mel dicam conclusionemque. Ne magna oportere duo, et est choro dolore. Ut alterum vituperata vim, ut qui vocibus mentitum. Lorem ipsum dolor sit amet, veniam laboramus vel ne, quo eirmod percipit ne, eum id viris adipisci. In probatus pertinacia pri, meis albucius mel ei, mel ut minimum interesset. Pro in essent iudicabit conceptam, eu lobortis splendide pertinacia vel. No est modus phaedrum, simul veritus accommodare per ea, senserit mnesarchum ea eum. Mei ad nihil torquatos, ex cum soluta vocibus aliquando. Ut aeterno appareat persequeris pri. Adipisci theophrastus eam ei, fuisset corpora intellegat ea mel. Ut usu debet essent, an usu habeo offendit partiendo, veritus maiorum neglegentur ad mea. Et augue legere ocurreret qui. An probo luptatum dissentias vix, sit te labore ancillae incorrupte. Libris accommodare ea ius, per id iudico prodesset. Atomorum contentiones signiferumque pro at. Reprimique reprehendunt ut mei, nemore persius eripuit vix in. Ex vix petentium cotidieque, brute melius indoctum vis ad. Et qui enim omittantur. Zril deserunt splendide eum ut, has te graece mucius, pri paulo affert interpretaris in.
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
