import React from 'react';
import './Detailpage.css';

function Detailpage() {
  return (
    <div className='listing-detail'>
        <div className='listing-detail-content'>
            <img className='listing-detail-img' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='house' />
            <h1 className='listing-detail-title'>
               Available property
               <div className='listing-detail-action'>
                  <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
                  <i class="listing-detail-action-icon fa-solid fa-trash"> </i>
                </div>
            </h1>
            <div className='listing-detail-meta-info'>
                <span className='listing-detail-author'>Author - <strong>John</strong></span>
                <span className='listing-detail-time'>1 day ago</span>
            </div>
            <p className='listing-detail-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tincidunt erat. Pellentesque ac ex id enim sagittis pellentesque vel at lectus. Nunc enim felis, pharetra id quam nec, mattis dictum justo. Vivamus dictum facilisis viverra. Donec luctus, libero id scelerisque fringilla, leo ipsum scelerisque lacus, nec consequat lorem felis eget est. Nunc iaculis ullamcorper sagittis. In iaculis purus ex, eget pharetra massa egestas quis.

                  Duis diam dolor, finibus non est in, pharetra tristique libero. Suspendisse elementum arcu mauris, at ultricies purus aliquet ac. Ut sed blandit mi, mollis condimentum sem. Aenean vitae dui in orci ornare tristique eget ac elit. Nullam placerat lacus ipsum, et ullamcorper odio egestas vel. Maecenas tellus ante, congue eget faucibus quis, placerat ac erat. Maecenas dapibus non tellus in efficitur. Suspendisse potenti. Etiam urna nulla, commodo lobortis blandit nec, iaculis nec purus. Mauris velit dui, ullamcorper non hendrerit ut, porta et nisi. Integer pulvinar sagittis tincidunt. Nam porta fringilla urna eu vehicula. Duis ut eros vulputate, pellentesque lectus tristique, porttitor lorem.

                  Aliquam placerat diam diam, vitae tincidunt metus vehicula sed. Suspendisse non enim vitae odio viverra laoreet. Suspendisse non ante odio. Nunc lacinia, lorem vitae aliquet commodo, nisl velit pretium tortor, sit amet fermentum justo ipsum et justo. Quisque aliquet imperdiet viverra. Vivamus mollis ultricies nunc, non ultrices leo ultrices eu. Phasellus tellus erat, aliquam at libero sed, semper accumsan diam. Integer auctor turpis vitae viverra dignissim. Nam iaculis mi sit amet vestibulum varius. In pellentesque felis sit amet consequat lobortis. Curabitur nec scelerisque dui. Fusce facilisis urna tortor, sed euismod turpis fermentum ac.

                  Maecenas quis ante sed lectus commodo efficitur. Integer id dapibus ligula, a sagittis orci. Pellentesque pharetra sed urna sit amet laoreet. Fusce at lacus elementum, tempus sem id, vehicula orci. Suspendisse ac mi mattis, ullamcorper libero ac, euismod lacus. Maecenas nec auctor mauris. Donec quis risus vel risus interdum tincidunt. Maecenas posuere varius diam non laoreet. Pellentesque dolor dui, tristique et tincidunt ac, posuere et ligula. Phasellus eu neque id nisi pretium mollis ut ac mi. Maecenas vitae sollicitudin justo, sed varius enim. Praesent suscipit enim lectus, non molestie elit malesuada quis. Donec vel tortor at enim rutrum mattis. Pellentesque eget justo non ipsum ultricies tincidunt et at eros.

                  Quisque elementum iaculis ex ac finibus. Morbi velit dui, lacinia ut ultrices vitae, viverra a mauris. Aenean ut odio lobortis, faucibus ante quis, vehicula lacus. Sed ullamcorper venenatis metus et sagittis. Proin mauris elit, accumsan a lobortis sit amet, facilisis non leo. Curabitur quis imperdiet sem. Etiam dictum a urna sed fringilla. Morbi pretium nunc non magna vestibulum pretium. Nunc hendrerit, risus non ornare tempor, sem enim tempus mi, eget elementum metus metus et eros. Aenean vel tincidunt nulla. Etiam vestibulum pharetra turpis.
            </p>
        </div>
    </div>
  )
}

export default Detailpage