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
 * The BillingTotalExtras model module.
 * @module model/BillingTotalExtras
 * @version 3.0.0-alpha1
 */
var BillingTotalExtras = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingTotalExtras</code>.
   * @alias module:model/BillingTotalExtras
   */
  function BillingTotalExtras() {
    _classCallCheck(this, BillingTotalExtras);

    BillingTotalExtras.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingTotalExtras, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingTotalExtras</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingTotalExtras} obj Optional instance to populate.
     * @return {module:model/BillingTotalExtras} The populated <code>BillingTotalExtras</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingTotalExtras();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('recurring')) {
          obj['recurring'] = _ApiClient["default"].convertToType(data['recurring'], 'Number');
        }

        if (data.hasOwnProperty('setup')) {
          obj['setup'] = _ApiClient["default"].convertToType(data['setup'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BillingTotalExtras;
}();
/**
 * The name of this extra cost.
 * @member {String} name
 */


BillingTotalExtras.prototype['name'] = undefined;
/**
 * Recurring monthly cost in USD. Not present if $0.0.
 * @member {Number} recurring
 */

BillingTotalExtras.prototype['recurring'] = undefined;
/**
 * Initial set up cost in USD. Not present if $0.0 or this is not the month the extra was added.
 * @member {Number} setup
 */

BillingTotalExtras.prototype['setup'] = undefined;
var _default = BillingTotalExtras;
exports["default"] = _default;