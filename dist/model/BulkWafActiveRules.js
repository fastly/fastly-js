"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafActiveRuleData = _interopRequireDefault(require("./WafActiveRuleData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BulkWafActiveRules model module.
 * @module model/BulkWafActiveRules
 * @version 3.0.0-alpha1
 */
var BulkWafActiveRules = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BulkWafActiveRules</code>.
   * @alias module:model/BulkWafActiveRules
   */
  function BulkWafActiveRules() {
    _classCallCheck(this, BulkWafActiveRules);

    BulkWafActiveRules.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BulkWafActiveRules, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BulkWafActiveRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkWafActiveRules} obj Optional instance to populate.
     * @return {module:model/BulkWafActiveRules} The populated <code>BulkWafActiveRules</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BulkWafActiveRules();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafActiveRuleData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BulkWafActiveRules;
}();
/**
 * @member {Array.<module:model/WafActiveRuleData>} data
 */


BulkWafActiveRules.prototype['data'] = undefined;
var _default = BulkWafActiveRules;
exports["default"] = _default;