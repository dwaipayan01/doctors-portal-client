import React from 'react';
import picture1 from "../../assets/images/fluoride.png";
import picture2 from "../../assets/images/cavity.png";
import picture3 from "../../assets/images/whitening.png";
import Show from './Show';

const Service = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 px-12 mt-5">
            <Show cardTitle={"Fluoride Treatment"} img={picture1}></Show>
            <Show cardTitle={"Cavity Filling"} img={picture2}></Show>
            <Show cardTitle={"Teeth Whitening"} img={picture3}></Show>
        </div>
    );
};

export default Service;