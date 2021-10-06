"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Condition model module.
 * @module model/Condition
 * @version 3.0.0-alpha1
 */
var Condition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Condition</code>.
   * @alias module:model/Condition
   */
  function Condition() {
    _classCallCheck(this, Condition);

    Condition.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Condition, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Condition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Condition} obj Optional instance to populate.
     * @return {module:model/Condition} The populated <code>Condition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Condition();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }

        if (data.hasOwnProperty('statement')) {
          obj['statement'] = _ApiClient["default"].convertToType(data['statement'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Condition;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


Condition.prototype['comment'] = undefined;
/**
 * Name of the condition. Required.
 * @member {String} name
 */

Condition.prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

Condition.prototype['priority'] = 100;
/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} statement
 */

Condition.prototype['statement'] = undefined;
/**
 * Type of the condition. Required.
 * @member {module:model/Condition.TypeEnum} type
 */

Condition.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Condition['TypeEnum'] = {
  /**
   * value: "REQUEST"
   * @const
   */
  "REQUEST": "REQUEST",

  /**
   * value: "CACHE"
   * @const
   */
  "CACHE": "CACHE",

  /**
   * value: "RESPONSE"
   * @const
   */
  "RESPONSE": "RESPONSE",

  /**
   * value: "PREFETCH"
   * @const
   */
  "PREFETCH": "PREFETCH"
};
var _default = Condition;
exports["default"] = _default;