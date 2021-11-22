"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsConfigurationResponseData = _interopRequireDefault(require("./TlsConfigurationResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsConfigurationResponse model module.
 * @module model/TlsConfigurationResponse
 * @version 3.0.0-alpha1
 */
var TlsConfigurationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsConfigurationResponse</code>.
   * @alias module:model/TlsConfigurationResponse
   */
  function TlsConfigurationResponse() {
    _classCallCheck(this, TlsConfigurationResponse);

    TlsConfigurationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsConfigurationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationResponse} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationResponse} The populated <code>TlsConfigurationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsConfigurationResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _TlsConfigurationResponseData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return TlsConfigurationResponse;
}();
/**
 * @member {module:model/TlsConfigurationResponseData} data
 */


TlsConfigurationResponse.prototype['data'] = undefined;
var _default = TlsConfigurationResponse;
exports["default"] = _default;