"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsConfiguration = _interopRequireDefault(require("./RelationshipsForTlsConfiguration"));

var _TlsConfigurationDataAttributes = _interopRequireDefault(require("./TlsConfigurationDataAttributes"));

var _TypeTlsConfiguration = _interopRequireDefault(require("./TypeTlsConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsConfigurationData model module.
 * @module model/TlsConfigurationData
 * @version 3.0.0-alpha1
 */
var TlsConfigurationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsConfigurationData</code>.
   * @alias module:model/TlsConfigurationData
   */
  function TlsConfigurationData() {
    _classCallCheck(this, TlsConfigurationData);

    TlsConfigurationData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsConfigurationData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsConfigurationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationData} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationData} The populated <code>TlsConfigurationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsConfigurationData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsConfiguration["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _TlsConfigurationDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsConfiguration["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return TlsConfigurationData;
}();
/**
 * @member {module:model/TypeTlsConfiguration} type
 */


TlsConfigurationData.prototype['type'] = undefined;
/**
 * @member {module:model/TlsConfigurationDataAttributes} attributes
 */

TlsConfigurationData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsConfiguration} relationships
 */

TlsConfigurationData.prototype['relationships'] = undefined;
var _default = TlsConfigurationData;
exports["default"] = _default;