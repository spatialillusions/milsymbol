## milsymbol in open layers 4 - ol.style.Icon()

Using the asCanvas() method in milsymbol makes it possible to assign the output from milsymbol as an image source. This way you can use the output from milsymbol in ol.style.Icon() in Open Layers. This should be able to handle a very large number of symbols.

If a style function is used for the symbols some sort of symbol cache should be used so that it won't have to regenerate all symbols at each interaction with the map. In this example however each symbol is set as a style on each feature.

This example uses Open Layers v4.6.5.
