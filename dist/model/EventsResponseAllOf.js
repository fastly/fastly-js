"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Event = _interopRequireDefault(require("./Event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventsResponseAllOf model module.
 * @module model/EventsResponseAllOf
 * @version 3.0.0-alpha1
 */
var EventsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventsResponseAllOf</code>.
   * @alias module:model/EventsResponseAllOf
   */
  function EventsResponseAllOf() {
    _classCallCheck(this, EventsResponseAllOf);

    EventsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/EventsResponseAllOf} The populated <code>EventsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Event["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EventsResponseAllOf;
}();
/**
 * @member {Array.<module:model/Event>} data
 */


EventsResponseAllOf.prototype['data'] = undefined;
var _default = EventsResponseAllOf;
exports["default"] = _default;