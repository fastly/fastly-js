"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafExclusionResponseData = _interopRequireDefault(require("./WafExclusionResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafExclusionResponse model module.
 * @module model/WafExclusionResponse
 * @version 3.0.0-alpha1
 */
var WafExclusionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionResponse</code>.
   * @alias module:model/WafExclusionResponse
   */
  function WafExclusionResponse() {
    _classCallCheck(this, WafExclusionResponse);

    WafExclusionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponse} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponse} The populated <code>WafExclusionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _WafExclusionResponseData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return WafExclusionResponse;
}();
/**
 * @member {module:model/WafExclusionResponseData} data
 */


WafExclusionResponse.prototype['data'] = undefined;
var _default = WafExclusionResponse;
exports["default"] = _default;