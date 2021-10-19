"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HistoricalMeta = _interopRequireDefault(require("./HistoricalMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Historical model module.
 * @module model/Historical
 * @version 3.0.0-alpha1
 */
var Historical = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Historical</code>.
   * @alias module:model/Historical
   */
  function Historical() {
    _classCallCheck(this, Historical);

    Historical.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Historical, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Historical</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Historical} obj Optional instance to populate.
     * @return {module:model/Historical} The populated <code>Historical</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Historical();

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _HistoricalMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Historical;
}();
/**
 * @member {module:model/HistoricalMeta} meta
 */


Historical.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

Historical.prototype['msg'] = undefined;
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */

Historical.prototype['status'] = undefined;
var _default = Historical;
exports["default"] = _default;