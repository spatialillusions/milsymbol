milsymbol
=========

milsymbol is a small library in pure javascript that creates SVG symbols according to MIL-STD-2525 and APP6. All unit symbols with SIDCs in both 2525(c) and APP6(b) are supported. The symbols are created according to APP6(c) symbology and might therefore differ from the  symbols in shown in the standard documents, but they are made according to the standards and follows the way that symbols are created in ADRP 1-02 (US Army Doctrine Reference Publication).

At the moment APP6(B) ANNEX D / 2525C APPENDIX A (Unit Symbols) and 2525C APPENDIX D (Signals intelligence symbols) and APPENDIX E (Stability operations symbols) /  symbols for 2525D are implemented in this library.

You can find all documentaion and examples at:
http://spatialillusions.com/milsymbol/

milsymbol is created and maintained by Måns Beckman, and you can visit my homepage http://www.spatialillusions.com to read more about who I am and see more examples of what MilSymbol can be used for. milsymbol is a hobby project created during weekends and evenings, so I'll try to work as fast as I can but my time for the project is limited.

If you use milsymbol for some project I'm always interested to hear about it, my contact details can be found on my homepage.

milsymbol 5.5
-------------
* **Custom extensions will have to be updated**
* Native canvas support with the asCanvas() method
* New storage format for all geometries so that it is possible to support several rendering engines
* Pushed the version number a bit since there is a lot of changes, was thinking about 0.6, but it was just minor API changes


milsymbol 0.5
-------------
* Much faster
* New API
* Support point symbols from MIL-STD-2525D
* New examples

Technology
----------

milsymbol uses pure javascript to create SVG, Scalable Vector Graphics, symbols for all types of unit and equipment symbols in APP6b, MIL-STD-2525C (not full support for emergency management symbols yet) and parts of 2525D. The symbols are created using building blocks defined in the code and no images or fonts are used, this makes it possible to modify almost every aspect of the symbols, such as fill, frame, color, size, stroke width and easily switch between APP6 and 2525 symbology.

To see what is possible with milsymbol use the unit test documents in the docs folder that lists all tabels and figures from the different standards using MilSymbol. (The documents uses milsymbol to render every image that you see, look into the code if you want to see how it is done.)

Dependencies
------------

milsymbol has no dependencies, all the code you need is in one javascript file, no external images, fonts or css needs to be loaded. 

Limitations
-----------

* milsymbol will need at least IE9 to work and will work in all other modern browsers on desktop and mobile.
* milsymbol does not render tactical graphics at the moment.

Licensing
---------

BSD, See License.txt for details
