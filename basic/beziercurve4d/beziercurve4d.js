var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    eraseAllButton = document.getElementById('eraseAllButton'),
    strokeStyleSelect = document.getElementById('strokeStyleSelect'),
    guidewireCheckbox = document.getElementById('guidewireCheckbox'),
    instructions = document.getElementById('instructions'),
    instructionsOkayButton = document.getElementById('instructionsOkayButton'),
    instructionsNoMoreButton = document.getElementById('instructionsNoMoreButton'),
    showInstructions = true,

    AXIS_MARGIN = 40,
    HORIZONTAL_TICK_SPACING = 10,
    VERTICAL_TICK_SPACING = 10,
    TICK_SIZE = 10,

    AXIS_OPTION = {
      x: AXIS_MARGIN, 
      y: canvas.hieght - AXIS_MARGIN
    },

    AXIS_TOP = AXIS_MARGIN,

    AXIS_RIGHT = canvas.width - AXIS_MARGIN,
    AXIS_WIDTH = AXIS_RIGHT - AXIS_ORINGIN.x,
    AXIS_HEIGHT = AXIS_ORINGIN.y - AXIS._TOP,

    MUM_WERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING,
    NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING,

    GRID_STROKE_STYLE = 'lightblue',
    GRID_SPACING = 10,

    CONTROL_POINT_RADIUS = 5,
    CONTROL_POINT_STROKE_STYLE = 'blue',
    CONTROL_POINT_FILL_STYLE = 'rgba(255, 255, 0, 0.5)',

    END_POINT_STROKE_STYLE = 'navy',
    END_POINT_FILL_STYLE = 'rgba(0,255,0,0.5)',

    GUIDEWIRE_STROKE_STYLE = 'rgba(0,0,230,0.4)',
    drawingImageData,
    mousedown = {},
    rubberbandRect = {},

    dragging = false,
    draggingPoint = false,

    endPoints = [{},{}],
    controlPoints = [{},{}],
    edting = false,
    guidewires = guidewireCheckbox.checked;

    // functions.......................................

    function  drawGrid() {
      context.strokeStyle = color;
      context.lineWidth = 0.5;

      for(var i = stepx + 0.5; i< context.canvas.width; i+= stepx) {
        context.beginPath();
        context.moveTo(i , 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
      }

      for(var i= stepy + 0.5; i<context.canvas.height; i += stepy) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
      }  
    }

    
