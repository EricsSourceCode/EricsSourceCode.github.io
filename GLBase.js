"use strict";


// Copyright Eric Chauvin 2023.


// This is licensed under the GNU General
// Public License (GPL).  It is the
// same license that Linux has.
// https://www.gnu.org/licenses/gpl-3.0.html


// See https://ericinarizona.github.io/
// For more information.



const GLBase =
{

initialClear: function()
  {
  const canvas = document.getElementById(
                             "mainCanvas" );

  const gl = canvas.getContext( "webgl" );

  if( gl === null )
    {
    window.alert(
        "Your browser doesn't support WebGL." );
    return;
    }

  gl.clearColor( 1.0, 0.0, 0.0, 1.0 );
  gl.clear( gl.COLOR_BUFFER_BIT );
  }

// ,

}
