"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafRuleItem = _interopRequireDefault(require("./IncludedWithWafRuleItem"));

var _WafRuleResponseData = _interopRequireDefault(require("./WafRuleResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleResponse model module.
 * @module model/WafRuleResponse
 * @version 3.0.0-alpha1
 */
var WafRuleResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleResponse</code>.
   * @alias module:model/WafRuleResponse
   */
  function WafRuleResponse() {
    _classCallCheck(this, WafRuleResponse);

    WafRuleResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleResponse} obj Optional instance to populate.
     * @return {module:model/WafRuleResponse} The populated <code>WafRuleResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _WafRuleResponseData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafRuleItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafRuleResponse;
}();
/**
 * @member {module:model/WafRuleResponseData} data
 */


WafRuleResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafRuleItem>} included
 */

WafRuleResponse.prototype['included'] = undefined;
var _default = WafRuleResponse;
exports["default"] = _default;