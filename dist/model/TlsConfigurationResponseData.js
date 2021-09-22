"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsConfiguration = _interopRequireDefault(require("./RelationshipsForTlsConfiguration"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TlsConfigurationData = _interopRequireDefault(require("./TlsConfigurationData"));

var _TlsConfigurationResponseDataAllOf = _interopRequireDefault(require("./TlsConfigurationResponseDataAllOf"));

var _TypeTlsConfiguration = _interopRequireDefault(require("./TypeTlsConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsConfigurationResponseData model module.
 * @module model/TlsConfigurationResponseData
 * @version 3.0.0-alpha1
 */
var TlsConfigurationResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsConfigurationResponseData</code>.
   * @alias module:model/TlsConfigurationResponseData
   */
  function TlsConfigurationResponseData() {
    _classCallCheck(this, TlsConfigurationResponseData);

    TlsConfigurationResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsConfigurationResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsConfigurationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationResponseData} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationResponseData} The populated <code>TlsConfigurationResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsConfigurationResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsConfiguration["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsConfiguration["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsConfigurationResponseData;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


TlsConfigurationResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsConfiguration} relationships
 */

TlsConfigurationResponseData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeTlsConfiguration} type
 */

TlsConfigurationResponseData.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a TLS configuration.
 * @member {String} id
 */

TlsConfigurationResponseData.prototype['id'] = undefined;
var _default = TlsConfigurationResponseData;
exports["default"] = _default;