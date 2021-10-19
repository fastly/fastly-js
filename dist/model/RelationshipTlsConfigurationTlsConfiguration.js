"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipMemberTlsConfiguration = _interopRequireDefault(require("./RelationshipMemberTlsConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsConfigurationTlsConfiguration model module.
 * @module model/RelationshipTlsConfigurationTlsConfiguration
 * @version 3.0.0-alpha1
 */
var RelationshipTlsConfigurationTlsConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsConfigurationTlsConfiguration</code>.
   * @alias module:model/RelationshipTlsConfigurationTlsConfiguration
   */
  function RelationshipTlsConfigurationTlsConfiguration() {
    _classCallCheck(this, RelationshipTlsConfigurationTlsConfiguration);

    RelationshipTlsConfigurationTlsConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsConfigurationTlsConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsConfigurationTlsConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsConfigurationTlsConfiguration} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsConfigurationTlsConfiguration} The populated <code>RelationshipTlsConfigurationTlsConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsConfigurationTlsConfiguration();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_RelationshipMemberTlsConfiguration["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsConfigurationTlsConfiguration;
}();
/**
 * @member {Array.<module:model/RelationshipMemberTlsConfiguration>} data
 */


RelationshipTlsConfigurationTlsConfiguration.prototype['data'] = undefined;
var _default = RelationshipTlsConfigurationTlsConfiguration;
exports["default"] = _default;