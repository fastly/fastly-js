"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsConfigurationTlsConfiguration = _interopRequireDefault(require("./RelationshipTlsConfigurationTlsConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsConfiguration model module.
 * @module model/RelationshipTlsConfiguration
 * @version 3.0.0-alpha1
 */
var RelationshipTlsConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsConfiguration</code>.
   * @alias module:model/RelationshipTlsConfiguration
   */
  function RelationshipTlsConfiguration() {
    _classCallCheck(this, RelationshipTlsConfiguration);

    RelationshipTlsConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsConfiguration} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsConfiguration} The populated <code>RelationshipTlsConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsConfiguration();

        if (data.hasOwnProperty('tls_configuration')) {
          obj['tls_configuration'] = _RelationshipTlsConfigurationTlsConfiguration["default"].constructFromObject(data['tls_configuration']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsConfiguration;
}();
/**
 * @member {module:model/RelationshipTlsConfigurationTlsConfiguration} tls_configuration
 */


RelationshipTlsConfiguration.prototype['tls_configuration'] = undefined;
var _default = RelationshipTlsConfiguration;
exports["default"] = _default;