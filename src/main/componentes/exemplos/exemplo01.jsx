import React from 'react';


function exemplos() {
  return <>

<table>
      <caption>A summary of the UK's most famous punk bands</caption>
      <thead>
        <tr>
          <th scope="col">Band</th>
          <th scope="col">Year formed</th>
          <th scope="col">No. of Albums</th>
          <th scope="col">Most famous song</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Buzzcocks</th>
          <td>1976</td>
          <td>9</td>
          <td>Ever fallen in love (with someone you shouldn't've)</td>
        </tr>
        <tr>
          <th scope="row">The Clash</th>
          <td>1976</td>
          <td>6</td>
          <td>London Calling</td>
        </tr>
        <tr>
          <th scope="row">The Damned</th>
          <td>1976</td>
          <td>10</td>
          <td>Smash it up</td>
        </tr>
        <tr>
          <th scope="row">Sex Pistols</th>
          <td>1975</td>
          <td>1</td>
          <td>Anarchy in the UK</td>
        </tr>
        <tr>
          <th scope="row">Sham 69</th>
          <td>1976</td>
          <td>13</td>
          <td>If The Kids Are United</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Total albums</th>
          <td colspan="2">77</td>
        </tr>
      </tfoot>
    </table>

    </>;
}

export default exemplos;