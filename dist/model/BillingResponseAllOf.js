"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingResponseAllOf model module.
 * @module model/BillingResponseAllOf
 * @version 3.0.0-alpha1
 */
var BillingResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingResponseAllOf</code>.
   * @alias module:model/BillingResponseAllOf
   */
  function BillingResponseAllOf() {
    _classCallCheck(this, BillingResponseAllOf);

    BillingResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingResponseAllOf} obj Optional instance to populate.
     * @return {module:model/BillingResponseAllOf} The populated <code>BillingResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingResponseAllOf();

        if (data.hasOwnProperty('line_items')) {
          obj['line_items'] = _ApiClient["default"].convertToType(data['line_items'], [_Timestamps["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BillingResponseAllOf;
}();
/**
 * @member {Array.<module:model/Timestamps>} line_items
 */


BillingResponseAllOf.prototype['line_items'] = undefined;
var _default = BillingResponseAllOf;
exports["default"] = _default;