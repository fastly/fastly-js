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
 * The BillingStatus model module.
 * @module model/BillingStatus
 * @version 3.0.0-alpha1
 */
var BillingStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingStatus</code>.
   * @alias module:model/BillingStatus
   */
  function BillingStatus() {
    _classCallCheck(this, BillingStatus);

    BillingStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingStatus} obj Optional instance to populate.
     * @return {module:model/BillingStatus} The populated <code>BillingStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingStatus();

        if (data.hasOwnProperty('sent_at')) {
          obj['sent_at'] = _ApiClient["default"].convertToType(data['sent_at'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BillingStatus;
}();
/**
 * @member {String} sent_at
 */


BillingStatus.prototype['sent_at'] = undefined;
/**
 * What the current status of this invoice can be.
 * @member {module:model/BillingStatus.StatusEnum} status
 */

BillingStatus.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

BillingStatus['StatusEnum'] = {
  /**
   * value: "Pending"
   * @const
   */
  "Pending": "Pending",

  /**
   * value: "Outstanding"
   * @const
   */
  "Outstanding": "Outstanding",

  /**
   * value: "Paid"
   * @const
   */
  "Paid": "Paid",

  /**
   * value: "MTD"
   * @const
   */
  "MTD": "MTD"
};
var _default = BillingStatus;
exports["default"] = _default;