import React from 'react'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';

export default function Boxes () {
  const firestore = firebase.firestore();
  const subjectref = firestore.collection('semesters');
  return (
    
      <></>
    // <>
    //   <div>
    //     <h1 className='display-4 text-center text-dark mt-2'>Notes- B.Tech</h1>
    //     {/* <!-- Boxes Btech 1sty --> */}
    //     <section className='p-2' id='btech1'>
    //       <div className='container'>
    //         <div className='row text-center g-4'>
    //           <h2 className='text-center text-secondary '>B.TECH 1st year</h2>
    //           <div className='col-md'>
    //             <div className='card bg-dark text-light w-100 h-100 '>
    //               <div className='card-body text-center '>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>1st SEM</h5>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - I </div>
    //                     <div className='col-xl-12'> Engineering Chemistry </div>
    //                     <div className='col-xl-12'> Basic Electronics Engineering </div>
    //                     <div className='col-xl-12'> Computer Programming </div>
    //                     <div className='col-xl-12'> Communicative & Technical English </div>
    //                     <div className='col-xl-12'> Constitution of India </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1wxV9f601dHkqZXwgGDhiJpU68UMn3MRf?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className='col-md'>
    //             <div className='card bg-dark text-light w-100 h-100 '>
    //               <div className='card-body text-center'>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>2nd SEM</h5>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - II </div>
    //                     <div className='col-xl-12'> Engineering Physics </div>
    //                     <div className='col-xl-12'> Basic Electrical Engineering </div>
    //                     <div className='col-xl-12'> Data Structures and Algorithms </div>
    //                     <div className='col-xl-12'> Environmental Science and Engineering</div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Physics Practical</div>
    //                       <div className='col-xl-12'> Basic Electrical Engineering Practical</div>
    //                       <div className='col-xl-12'> Data Structure and Engineering Practical</div>
    //                       {/* <!-- <div className="col-xl-12"> Communicative & Technical English </div> -->
    //                                         <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>

    //                 </div>

    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1ffo3O1YF6i8x0Mf2_NTsRTqmoKZOCyxp?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     {/* <!-- Boxes Btech 2ndy --> */}
    //     <section className=' p-2 ' id='btech2'>
    //       <div className='container'>
    //         <div className='row text-center g-4'>
    //           <h2 className='text-center text-secondary  '>B.TECH 2nd year</h2>

    //           <div className='col-md'>
    //             <div className='card bg-light text-dark w-100 h-100'>
    //               <div className='card-body text-center '>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>3rd SEM</h5>
    //                 <h6 className='card-title text-bold'>CSE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - III </div>
    //                     <div className='col-xl-12'> Digital Electronics </div>
    //                     <div className='col-xl-12'> Object Oriented Programming using JAVA </div>
    //                     <div className='col-xl-12'> Dsicrete Mathematics </div>
    //                     <div className='col-xl-12'> Basics of Mechanical Engineering</div>
    //                     <div className='col-xl-12'> Engineering Economics </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Digital Electronics Practical</div>
    //                       <div className='col-xl-12'> Object Oriented Programming using JAVA Practical
    //                       </div>
    //                       <div className='col-xl-12'> Yoga</div>
    //                       {/* <!-- <div className="col-xl-12"> Communicative & Technical English </div> -->
    //                                         <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <h6 className='card-title '>ECE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - IV </div>
    //                     <div className='col-xl-12'> Design and Analysis of Algorithms </div>
    //                     <div className='col-xl-12'> Database Management Systems </div>
    //                     <div className='col-xl-12'> Fundamentals of Management </div>
    //                     <div className='col-xl-12'> Computer Organization and Architechture </div>
    //                     {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <h6 className='card-title '>EEE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Object Oriented Programming using JAVA </div>
    //                     <div className='col-xl-12'> Circuit Theory </div>
    //                     <div className='col-xl-12'> Measurment of Instruments </div>
    //                     <div className='col-xl-12'> Maths-III </div>
    //                     <div className='col-xl-12'> Engineering Economics </div>
    //                     <div className='col-xl-12'> Analog Electronic Circuits </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Analog Electronic Circuits Lab </div>
    //                       <div className='col-xl-12'> Object Oriented Programming using JAVA Lab</div>
    //                       <div className='col-xl-12'> Measurment of Instruments Lab</div>
    //                       <div className='col-xl-12'> Circuit Theory Lab </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <h6 className='card-title '>EIE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - I </div>
    //                     <div className='col-xl-12'> Engineering Chemistry </div>
    //                     <div className='col-xl-12'> Basic Electronics Engineering </div>
    //                     <div className='col-xl-12'> Computer Programming </div>
    //                     <div className='col-xl-12'> Communicative & Technical English </div>
    //                     <div className='col-xl-12'> Constitution of India </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1sfy7bClIUF_jSmOc2sHbr4llX5iYmGnT?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className='col-md'>
    //             <div className='card bg-light text-dark w-100 h-100'>
    //               <div className='card-body text-center'>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>4th SEM</h5>
    //                 <h6 className='card-title text-bold'>CSE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - IV </div>
    //                     <div className='col-xl-12'> Design and Analysis of Algorithms </div>
    //                     <div className='col-xl-12'> Database Management Systems </div>
    //                     <div className='col-xl-12'> Fundamentals of Management </div>
    //                     <div className='col-xl-12'> Computer Organization and Architechture </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Design and Analysis of Algorithms Practical
    //                       </div>
    //                       <div className='col-xl-12'> Database Management Systems Practical</div>
    //                       <div className='col-xl-12'> Computer Organization and Architechture Practical
    //                       </div>
    //                       {/* <!-- <div className="col-xl-12"> Communicative & Technical English </div> --> */}
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>

    //                 </div>
    //                 <h6 className='card-title '>ECE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - I </div>
    //                     <div className='col-xl-12'> Engineering Chemistry </div>
    //                     <div className='col-xl-12'> Basic Electronics Engineering </div>
    //                     <div className='col-xl-12'> Computer Programming </div>
    //                     <div className='col-xl-12'> Communicative & Technical English </div>
    //                     <div className='col-xl-12'> Constitution of India </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <h6 className='card-title '>EEE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Digital Electronic Circuits </div>
    //                     <div className='col-xl-12'> Math-IV </div>
    //                     <div className='col-xl-12'> Controlled Systems Engineering </div>
    //                     <div className='col-xl-12'> Electrical Machine- I </div>
    //                     <div className='col-xl-12'> Engineering Economics </div>
    //                     <div className='col-xl-12'> Personal Ethics and Values </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> DEC Lab</div>
    //                       <div className='col-xl-12'> CSE Lab</div>
    //                       <div className='col-xl-12'> Machine- I</div>
    //                       <div className='col-xl-12'> Yoga  </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <h6 className='card-title '>EIE</h6>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - I </div>
    //                     <div className='col-xl-12'> Engineering Chemistry </div>
    //                     <div className='col-xl-12'> Basic Electronics Engineering </div>
    //                     <div className='col-xl-12'> Computer Programming </div>
    //                     <div className='col-xl-12'> Communicative & Technical English </div>
    //                     <div className='col-xl-12'> Constitution of India </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>

    //                   </div>
    //                 </div>
    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1vxR2iP161a6ZhGC27O6mnobmIRpEemh2?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     {/* <!-- Boxes Btech 3rdy --> */}
    //     <section className='p-2' id='btech3'>
    //       <div className='container'>
    //         <div className='row text-center g-4'>
    //           <h2 className='text-center text-secondary '>B.TECH 3rd year</h2>

    //           <div className='col-md'>
    //             <div className='card bg-dark text-light w-100 h-100'>
    //               <div className='card-body text-center '>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>5th SEM</h5>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - I </div>
    //                     <div className='col-xl-12'> Engineering Chemistry </div>
    //                     <div className='col-xl-12'> Basic Electronics Engineering </div>
    //                     <div className='col-xl-12'> Computer Programming </div>
    //                     <div className='col-xl-12'> Communicative & Technical English </div>
    //                     <div className='col-xl-12'> Constitution of India </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1wxV9f601dHkqZXwgGDhiJpU68UMn3MRf?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className='col-md'>
    //             <div className='card bg-dark text-light w-100 h-100'>
    //               <div className='card-body text-center'>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>2nd SEM</h5>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Lorem ipsum dolor sit</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'>• Engineering Mathematics - II </div>
    //                     <div className='col-xl-12'>• Engineering Physics </div>
    //                     <div className='col-xl-12'>• Basic Electrical Engineering </div>
    //                     <div className='col-xl-12'>• Data Structures and Algorithms </div>
    //                     <div className='col-xl-12'>• Environmental Science and Engineering</div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Physics Practical</div>
    //                       <div className='col-xl-12'> Basic Electrical Engineering Practical</div>
    //                       <div className='col-xl-12'> Data Structure and Engineering Practical</div>
    //                       {/* <!-- <div className="col-xl-12"> Communicative & Technical English </div> --> */}
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>

    //                 </div>

    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1wxV9f601dHkqZXwgGDhiJpU68UMn3MRf?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     {/* <!-- Boxes Btech 4th y --> */}
    //     <section className=' p-2' id='btech4'>
    //       <div className='container'>
    //         <div className='row text-center g-4'>
    //           <h2 className='text-center text-secondary '>B.TECH 4th year</h2>

    //           <div className='col-md'>
    //             <div className='card bg-light text-dark w-100 h-100'>
    //               <div className='card-body text-center '>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>7th SEM</h5>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Theory</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'> Engineering Mathematics - I </div>
    //                     <div className='col-xl-12'> Engineering Chemistry </div>
    //                     <div className='col-xl-12'> Basic Electronics Engineering </div>
    //                     <div className='col-xl-12'> Computer Programming </div>
    //                     <div className='col-xl-12'> Communicative & Technical English </div>
    //                     <div className='col-xl-12'> Constitution of India </div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Chemistry Practical</div>
    //                       <div className='col-xl-12'> Basic Electronics Engineering Practical</div>
    //                       <div className='col-xl-12'> Computer Programming Practical</div>
    //                       <div className='col-xl-12'> Communicative & Technical English </div>
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>
    //                 </div>

    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1wxV9f601dHkqZXwgGDhiJpU68UMn3MRf?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className='col-md'>
    //             <div className='card bg-light text-dark w-100 h-100'>
    //               <div className='card-body text-center'>
    //                 <div className='h1 mb-3'>
    //                   <i className='bi bi-journal-text' />
    //                 </div>
    //                 <h5 className='card-title'>8th SEM</h5>
    //                 <h6 className='card-subtitle mb-2 text-bold text-muted'>• Lorem ipsum dolor sit</h6>
    //                 <div className='grid'>
    //                   <div className='row'>
    //                     <div className='col-xl-12'>• Engineering Mathematics - II </div>
    //                     <div className='col-xl-12'>• Engineering Physics </div>
    //                     <div className='col-xl-12'>• Basic Electrical Engineering </div>
    //                     <div className='col-xl-12'>• Data Structures and Algorithms </div>
    //                     <div className='col-xl-12'>• Environmental Science and Engineering</div>
    //                   </div>
    //                   <div className='col-xl-12' />
    //                   <h6 className='card-subtitle mb-2 text-bold text-muted'>• Practical</h6>
    //                   <div className='grid'>
    //                     <div className='row'>
    //                       {/* <!-- <div className="col-xl-12"> Engineering Mathematics - I </div> --> */}
    //                       <div className='col-xl-12'> Engineering Physics Practical</div>
    //                       <div className='col-xl-12'> Basic Electrical Engineering Practical</div>
    //                       <div className='col-xl-12'> Data Structure and Engineering Practical</div>
    //                       {/* <!-- <div className="col-xl-12"> Communicative & Technical English </div> --> */}
    //                       {/* <!-- <div className="col-xl-12"> Constitution of India </div> --> */}
    //                     </div>
    //                   </div>

    //                 </div>

    //               </div>
    //               <div className='d-flex flex-row justify-content-center mt-auto mb-4'>
    //                 <a href='https://drive.google.com/drive/folders/1wxV9f601dHkqZXwgGDhiJpU68UMn3MRf?usp=sharing' className='btn btn-dark '>Resources</a>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </>
  )
}
