"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventAttributes = _interopRequireDefault(require("./EventAttributes"));

var _TypeEvent = _interopRequireDefault(require("./TypeEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Event model module.
 * @module model/Event
 * @version 3.0.0-alpha1
 */
var Event = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   */
  function Event() {
    _classCallCheck(this, Event);

    Event.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Event, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Event();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _EventAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeEvent["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return Event;
}();
/**
 * @member {module:model/EventAttributes} attributes
 */


Event.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying an event.
 * @member {String} id
 */

Event.prototype['id'] = undefined;
/**
 * @member {module:model/TypeEvent} type
 */

Event.prototype['type'] = undefined;
var _default = Event;
exports["default"] = _default;