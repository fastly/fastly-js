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
   * @implements module:model/TlsConfigurationData
   * @implements module:model/TlsConfigurationResponseDataAllOf
   */
  function TlsConfigurationResponseData() {
    _classCallCheck(this, TlsConfigurationResponseData);

    _TlsConfigurationData["default"].initialize(this);

    _TlsConfigurationResponseDataAllOf["default"].initialize(this);

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

        _TlsConfigurationData["default"].constructFromObject(data, obj);

        _TlsConfigurationResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsConfiguration["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsConfiguration["default"].constructFromObject(data['relationships']);
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
 * @member {module:model/TypeTlsConfiguration} type
 */


TlsConfigurationResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

TlsConfigurationResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsConfiguration} relationships
 */

TlsConfigurationResponseData.prototype['relationships'] = undefined;
/**
 * Alphanumeric string identifying a TLS configuration.
 * @member {String} id
 */

TlsConfigurationResponseData.prototype['id'] = undefined; // Implement TlsConfigurationData interface:

/**
 * @member {module:model/TypeTlsConfiguration} type
 */

_TlsConfigurationData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/TlsConfigurationDataAttributes} attributes
 */

_TlsConfigurationData["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsConfiguration} relationships
 */

_TlsConfigurationData["default"].prototype['relationships'] = undefined; // Implement TlsConfigurationResponseDataAllOf interface:

/**
 * Alphanumeric string identifying a TLS configuration.
 * @member {String} id
 */

_TlsConfigurationResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

_TlsConfigurationResponseDataAllOf["default"].prototype['attributes'] = undefined;
var _default = TlsConfigurationResponseData;
exports["default"] = _default;