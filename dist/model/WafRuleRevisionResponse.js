"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafRule = _interopRequireDefault(require("./WafRule"));

var _WafRuleRevisionResponseData = _interopRequireDefault(require("./WafRuleRevisionResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleRevisionResponse model module.
 * @module model/WafRuleRevisionResponse
 * @version 3.0.0-alpha1
 */
var WafRuleRevisionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleRevisionResponse</code>.
   * @alias module:model/WafRuleRevisionResponse
   */
  function WafRuleRevisionResponse() {
    _classCallCheck(this, WafRuleRevisionResponse);

    WafRuleRevisionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleRevisionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleRevisionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionResponse} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionResponse} The populated <code>WafRuleRevisionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleRevisionResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _WafRuleRevisionResponseData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_WafRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafRuleRevisionResponse;
}();
/**
 * @member {module:model/WafRuleRevisionResponseData} data
 */


WafRuleRevisionResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */

WafRuleRevisionResponse.prototype['included'] = undefined;
var _default = WafRuleRevisionResponse;
exports["default"] = _default;