"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PopCoordinates = _interopRequireDefault(require("./PopCoordinates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Pop model module.
 * @module model/Pop
 * @version 3.0.0-alpha1
 */
var Pop = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pop</code>.
   * @alias module:model/Pop
   */
  function Pop() {
    _classCallCheck(this, Pop);

    Pop.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pop, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Pop</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pop} obj Optional instance to populate.
     * @return {module:model/Pop} The populated <code>Pop</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pop();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], 'String');
        }

        if (data.hasOwnProperty('coordinates')) {
          obj['coordinates'] = _PopCoordinates["default"].constructFromObject(data['coordinates']);
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Pop;
}();
/**
 * @member {String} code
 */


Pop.prototype['code'] = undefined;
/**
 * @member {String} name
 */

Pop.prototype['name'] = undefined;
/**
 * @member {String} group
 */

Pop.prototype['group'] = undefined;
/**
 * @member {module:model/PopCoordinates} coordinates
 */

Pop.prototype['coordinates'] = undefined;
/**
 * @member {String} shield
 */

Pop.prototype['shield'] = undefined;
var _default = Pop;
exports["default"] = _default;